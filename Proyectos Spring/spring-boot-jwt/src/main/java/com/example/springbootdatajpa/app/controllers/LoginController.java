package com.example.springbootdatajpa.app.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.security.Principal;

@Controller
public class LoginController {
    @RequestMapping(value = "/login")
    public String login(@RequestParam(value = "error", required = false) String error , @RequestParam(value = "logout", required = false) String logout, Model model, Principal principal , RedirectAttributes flash) { //con principal nos permite validar
        if (principal != null) { //si ya se ha iniciado sesion
            flash.addFlashAttribute("info", "Ya ha iniciado sesion anteriormente");
            return "redirect:/";
        }
        if (error != null) {
            model.addAttribute("error", "Error en el login: Nombre de usuario o contraseña incorrecta");
        }
        if (logout != null) {
            model.addAttribute("success", "Ha cerrado sesion con exito");

        }
        return "login";
    }
}
