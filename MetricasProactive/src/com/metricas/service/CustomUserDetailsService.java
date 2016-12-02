package com.metricas.service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.metricas.custommodel.CustomUsuario;
import com.metricas.model.Perfil;
import com.metricas.model.Segmento;

@Service("customUserDetailsService")
public class CustomUserDetailsService implements UserDetailsService{
	
	@Autowired
	private com.metricas.service.UsuarioService usuarioService;
	
	@Override
	@Transactional(readOnly = true)
	public UserDetails loadUserByUsername(String soeid) throws UsernameNotFoundException {
		
		com.metricas.model.Usuario domainUser = usuarioService.obtenerUsuarioPorSoeid(soeid);
		
		boolean enabled = true;
		boolean accountNonExpired = true;
		boolean credentialsNonExpired = true;
		boolean accountNonLocked = true;
		
		 /*return new User(
	                domainUser.getSoeid(),
	                domainUser.getContrasena(), 
	                enabled, 
	                accountNonExpired, 
	                credentialsNonExpired, 
	                accountNonLocked,
	                getAuthorities(domainUser.getPerfiles())
	     );*/
		 
		return new CustomUsuario(
				domainUser.getSoeid(),
                domainUser.getContrasena(), 
                enabled, 
                accountNonExpired, 
                true, 
                accountNonLocked,
                getAuthorities(domainUser.getPerfiles()),
                domainUser.getSegmentos(),
                domainUser.getNombre(),
                domainUser.getApellidoPaterno()
		);

	}
	
	public Collection<? extends GrantedAuthority> getAuthorities(Set<Perfil> perfiles) {
		List<GrantedAuthority> authList = getGrantedAuthorities(getRoles(perfiles));
		return authList;
	}
	
	public List<String> getRoles(Set<Perfil> perfiles){
        List<String> roles = new ArrayList<String>();
        for(Perfil perfil:perfiles){
        	if(perfil.getId() == 21){
        		roles.add("ROLE_DIRECTOR");
        	}else if(perfil.getId() == 22){
        		roles.add("ROLE_DIRECTO");
        	}
        }
        return roles;
    }
	
	public static List<GrantedAuthority> getGrantedAuthorities(List<String> roles) {
        List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
         
        for (String role : roles) {
            authorities.add(new SimpleGrantedAuthority(role));
        }
        return authorities;
    }
	
	public List<String> getSegmento(Set<Segmento> segmentos){
		List<String> segmentosAsignados = new ArrayList<String>();
		for(Segmento segmento:segmentos){
			if(segmento.getId() == 1){
				segmentosAsignados.add("BANCA EMPRESARIAL");
			}
			if(segmento.getId() == 2){
				segmentosAsignados.add("CORPORATIVO");
			}
			if(segmento.getId() == 3){
				segmentosAsignados.add("ATE");
			}
			if(segmento.getId() == 4){
				segmentosAsignados.add("PYME");
			}
			if(segmento.getId() == 5){
				segmentosAsignados.add("OFFLINE");
			}
			if(segmento.getId() == 6){
				segmentosAsignados.add("PYME OFFLINE");
			}
		}
		return segmentosAsignados;
	}
	
}
