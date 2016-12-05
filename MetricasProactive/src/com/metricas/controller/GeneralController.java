package com.metricas.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import com.metricas.custommodel.CustomUsuario;
import com.metricas.service.UsuarioService;


@Controller
public class GeneralController {

	@Autowired
	private UsuarioService usuarioService;
	
	@RequestMapping(value = "/general", method = RequestMethod.GET)
	public String test(Model model){
		CustomUsuario principal = (CustomUsuario) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		String soeidSesion = principal.getNombre();
		model.addAttribute("soeidSesion", soeidSesion);
		
		int valores[] ={1,2,3,4,5};
		
		//usuarios = usuarioService.obtenerUsuarios();
		//model.addAttribute("usuarios", usuarios);
		return "login/general";
	}
	
}
