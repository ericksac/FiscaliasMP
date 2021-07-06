package com.fiscalia.crud.controllers;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fiscalia.crud.models.FiscaliaDTO;
import com.fiscalia.crud.repositories.IFiscaliaDAO;

@RestController
@CrossOrigin(origins="*", methods = {RequestMethod.GET})
@RequestMapping("/api/fiscalias")
public class FiscaliaController {
	
	@Autowired
	private IFiscaliaDAO repository; 

	
	@GetMapping("/")
	public List<FiscaliaDTO> getAll (){
		return repository.findAll();
	}

}


