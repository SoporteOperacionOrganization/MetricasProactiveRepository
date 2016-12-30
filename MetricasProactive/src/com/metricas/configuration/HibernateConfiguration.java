package com.metricas.configuration;

import java.util.Properties;

import javax.sql.DataSource;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.hibernate4.HibernateTransactionManager;
import org.springframework.orm.hibernate4.LocalSessionFactoryBean;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableTransactionManagement
@ComponentScan({"com.metricas.configuration"})
@PropertySource(value = {"classpath:application.properties"})
public class HibernateConfiguration {

	@Autowired
    private Environment environment;

	@Value("${metricasLogin.jdbc.driverClassName}")
	private String dbDriverClassName;
	@Value("${metricasLogin.jdbc.url}")
	private String dbUrl;
	@Value("${metricasLogin.jdbc.username}")
	private String dbUserName;
	@Value("${metricasLogin.jdbc.password}")
	private String dbPassword;
	@Value("${metricasLogin.hibernate.dialect}")
	private String dbDialect;
	
	@Bean
    public LocalSessionFactoryBean sessionFactoryLogin() {
        LocalSessionFactoryBean sessionFactory = new LocalSessionFactoryBean();
        sessionFactory.setDataSource(dataSourceLogin());
        sessionFactory.setPackagesToScan(new String[] { "com.metricas.model" });
        sessionFactory.setHibernateProperties(hibernatePropertiesLogin());
        return sessionFactory;
     }
	
	@Bean
    public DataSource dataSourceLogin() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName(dbDriverClassName);
        dataSource.setUrl(dbUrl);
        dataSource.setUsername(dbUserName);
        dataSource.setPassword(dbPassword);
        return dataSource;
    }
	
	private Properties hibernatePropertiesLogin() {
        Properties properties = new Properties();
        properties.put("hibernate.dialect", dbDialect);
        properties.put("hibernate.show_sql", environment.getRequiredProperty("metricasLogin.hibernate.show_sql"));
        properties.put("hibernate.format_sql", environment.getRequiredProperty("metricasLogin.hibernate.format_sql"));
        return properties;        
    }

	@Bean
    @Autowired
    @Primary
    public HibernateTransactionManager transactionManagerLogin(SessionFactory sessionFactoryLogin) {
       HibernateTransactionManager txManager = new HibernateTransactionManager();
       txManager.setSessionFactory(sessionFactoryLogin);
       return txManager;
    }
	
}
