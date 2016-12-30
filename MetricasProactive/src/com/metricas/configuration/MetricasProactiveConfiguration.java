package com.metricas.configuration;

import java.io.IOException;

import org.jasypt.encryption.pbe.PooledPBEStringEncryptor;
import org.jasypt.encryption.pbe.config.EnvironmentStringPBEConfig;
import org.jasypt.spring31.properties.EncryptablePropertyPlaceholderConfigurer;
import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ResourceBundleMessageSource;
import org.springframework.core.io.DefaultResourceLoader;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import org.springframework.web.servlet.view.JstlView;

@Configuration
@EnableWebMvc
@ComponentScan(basePackages = "com.metricas")
public class MetricasProactiveConfiguration extends WebMvcConfigurerAdapter{

	@Bean
    public ViewResolver viewResolver() {
        InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();
        viewResolver.setOrder(1);
        viewResolver.setViewClass(JstlView.class);
        viewResolver.setPrefix("/WEB-INF/views/jsp/");
        viewResolver.setSuffix(".jsp");
        return viewResolver;
    }
	
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("/resources/**").addResourceLocations("/WEB-INF/resources/core/");
	}
	
	@Bean
	public MessageSource messageSource() {
	        ResourceBundleMessageSource messageSource = new ResourceBundleMessageSource();
	        messageSource.setBasename("messages");
	        return messageSource;
	}
	
	@Bean
	public static EnvironmentStringPBEConfig environmentVariablesConfiguration() {
	   EnvironmentStringPBEConfig config = new EnvironmentStringPBEConfig();
	   config.setAlgorithm(System.getProperty("java.metproa.securepropertiesalgorit"));
	   config.setPassword(System.getProperty("java.metproa.securepropertieskey"));
	   return config;
	}
	
	@Bean
	public static PooledPBEStringEncryptor stringEncryptor() {
	   PooledPBEStringEncryptor encryptor = new PooledPBEStringEncryptor();
	   encryptor.setPoolSize(1);
	   encryptor.setConfig(environmentVariablesConfiguration());
	   return encryptor;
	}
	
	@Bean
    public static EncryptablePropertyPlaceholderConfigurer ppc() throws IOException {
		EncryptablePropertyPlaceholderConfigurer ppc = new EncryptablePropertyPlaceholderConfigurer(stringEncryptor());
		ResourceLoader resourceLoader = new DefaultResourceLoader();
		Resource resource = resourceLoader.getResource("classpath:application.properties");
        ppc.setLocation(resource);
        return ppc;
    }
	
}
