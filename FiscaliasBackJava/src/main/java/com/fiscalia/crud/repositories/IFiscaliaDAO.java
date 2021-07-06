package com.fiscalia.crud.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fiscalia.crud.models.FiscaliaDTO;

public interface IFiscaliaDAO extends JpaRepository<FiscaliaDTO, Long> {
 
}