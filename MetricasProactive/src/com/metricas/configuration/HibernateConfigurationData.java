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
public class HibernateConfigurationData {

	@Autowired
    private Environment environment;
	
	@Value("${metricasData.jdbc.driverClassName}")
	private String dbDriverClassName;
	@Value("${metricasData.jdbc.url}")
	private String dbUrl;
	@Value("${metricasData.jdbc.username}")
	private String dbUserName;
	@Value("${metricasData.jdbc.password}")
	private String dbPassword;
	@Value("${metricasData.hibernate.dialect}")
	private String dbDialect;
	
	@Bean
    public LocalSessionFactoryBean sessionFactoryData() {
        LocalSessionFactoryBean sessionFactory = new LocalSessionFactoryBean();
        sessionFactory.setDataSource(dataSourceData());
        sessionFactory.setPackagesToScan(new String[] { "com.metricas.model" });
        sessionFactory.setHibernateProperties(hibernatePropertiesData());
        return sessionFactory;
     }
	
	@Bean
    public DataSource dataSourceData() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName(dbDriverClassName);
        dataSource.setUrl(dbUrl);
        dataSource.setUsername(dbUserName);
        dataSource.setPassword(dbPassword);
        return dataSource;
    }
	
	private Properties hibernatePropertiesData() {
        Properties properties = new Properties();
        properties.put("hibernate.dialect", dbDialect);
        properties.put("hibernate.show_sql", environment.getRequiredProperty("metricasData.hibernate.show_sql"));
        properties.put("hibernate.format_sql", environment.getRequiredProperty("metricasData.hibernate.format_sql"));
        return properties;        
    }
	
	@Bean
    @Autowired
    public HibernateTransactionManager transactionManagerData(SessionFactory sessionFactoryData) {
       HibernateTransactionManager txManager = new HibernateTransactionManager();
       txManager.setSessionFactory(sessionFactoryData);
       return txManager;
    }
	
}
