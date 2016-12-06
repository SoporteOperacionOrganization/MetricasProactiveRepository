package com.metricas.controller;

import java.util.Set;

import javax.servlet.http.HttpServletRequest;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.metricas.custommodel.CustomUsuario;
import com.metricas.model.Segmento;

@Controller
public class LoginController {

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String root(Model model) {
		return "login/login";
	}

	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String login(Model model) {
		return "login/login";
	}

	@RequestMapping(value = "/inicio", method = RequestMethod.GET)
	public String inicio(Model model, HttpServletRequest request) {
		CustomUsuario principal = (CustomUsuario) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		Set<Segmento> segmentos = principal.getSegmentos();

		if (request.isUserInRole("ROLE_DIRECTOR")) {
			return "redirect:/general";
		} else {
			if (!segmentos.isEmpty()) {
				String primerSegmento = segmentos.iterator().next().getNombre();
				switch (primerSegmento) {
				case "BANCA EMPRESARIAL":
					return "redirect:/empresarial";
				case "ATE":
					return "redirect:/online";
				case "PYME":
					return "redirect:/pyme";
				case "OFFLINE":
					return "redirect:/offline";
				case "PYME OFFLINE":
					return "redirect:/pymeOffline";
				default:
					return "redirect:/login/login";
				}
			}
			return "login/login";
		}
	}

}
