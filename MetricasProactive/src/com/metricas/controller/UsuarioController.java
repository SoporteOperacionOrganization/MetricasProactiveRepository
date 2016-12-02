package com.metricas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.metricas.service.UsuarioService;
import com.metricas.model.Usuario;

@Controller
public class UsuarioController {

	@Autowired
	private UsuarioService usuarioService;
	
	@RequestMapping(value = "/listarUsuarios", method = RequestMethod.GET)
	public String test(Model model){
		List<Usuario> usuarios;
		usuarios = usuarioService.obtenerUsuarios();
		model.addAttribute("usuarios", usuarios);
		return "usuario/listarUsuarios";
	}
	
}
