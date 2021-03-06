package com.metricas.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.metricas.security.CustomPasswordEncoder;

@Configuration
@EnableWebSecurity
public class MetricasProactiveSecurityConfig extends WebSecurityConfigurerAdapter{

	@Autowired
	@Qualifier("customUserDetailsService")
	UserDetailsService userDetailsService;
	
	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsService);
		auth.authenticationProvider(authenticationProvider());
	}
	
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new CustomPasswordEncoder();
	}
	
	@Bean
	public DaoAuthenticationProvider authenticationProvider() {
		DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
		authenticationProvider.setUserDetailsService(userDetailsService);
		authenticationProvider.setPasswordEncoder(passwordEncoder());
		authenticationProvider.setHideUserNotFoundExceptions(false);
		return authenticationProvider;
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable();
		
		http.authorizeRequests().antMatchers("/", "/login", "/logout").permitAll();
		http.authorizeRequests().antMatchers("/inicio","/general", "/empresarial", "/obtenerLlamadasTotalesSegmentoComparativo", 
				"/obtenerLlamadasTotalesFamiliasSegmento", "/obtenerLlamadasTotalesSegmento", "/servicios",
				"/concurrencia", "/obtenerLlamadasTotalesFamiliasSegmentoComparativo", "/obtenerLlamadasFamilia",
				"/clientesFrecuentes", "/offline", "/online", "/pyme", "/pymeOffline").access("hasAnyRole('ROLE_DIRECTOR', 'ROLE_DIRECTO')");
		http.authorizeRequests().and().exceptionHandling().accessDeniedPage("/403");
		http.authorizeRequests().and().formLogin().loginProcessingUrl("/j_spring_security_check").loginPage("/login")
				.defaultSuccessUrl("/inicio").failureUrl("/login?error=true")
				.usernameParameter("soeid")
				.passwordParameter("contrasena")
				.and().logout().logoutUrl("/logout").logoutSuccessUrl("/login");

		http.sessionManagement().invalidSessionUrl("/login");
		http.sessionManagement().maximumSessions(2);
	}
	
}
