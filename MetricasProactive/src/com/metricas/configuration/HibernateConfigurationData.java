package com.metricas.configuration;

import java.util.Properties;

import javax.sql.DataSource;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
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
        dataSource.setDriverClassName(environment.getRequiredProperty("metricasData.jdbc.driverClassName"));
        dataSource.setUrl(environment.getRequiredProperty("metricasData.jdbc.url"));
        dataSource.setUsername(environment.getRequiredProperty("metricasData.jdbc.username"));
        dataSource.setPassword(environment.getRequiredProperty("metricasData.jdbc.password"));
        return dataSource;
    }
	
	private Properties hibernatePropertiesData() {
        Properties properties = new Properties();
        properties.put("hibernate.dialect", environment.getRequiredProperty("metricasData.hibernate.dialect"));
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
