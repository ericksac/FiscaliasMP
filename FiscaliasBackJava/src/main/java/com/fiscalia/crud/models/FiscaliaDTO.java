package com.fiscalia.crud.models;
import javax.persistence.*;

@Entity
@Table(name = "fiscalias")

public class FiscaliaDTO {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_fiscalia;
	private String nombre;
	private String direccion;
	private String telefono;
	private String archivo_url;
	public Long getId_fiscalia() {
		return id_fiscalia;
	}
	public void setId_fiscalia(Long id_fiscalia) {
		this.id_fiscalia = id_fiscalia;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getDireccion() {
		return direccion;
	}
	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}
	public String getTelefono() {
		return telefono;
	}
	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}
	public String getArchivo_url() {
		return archivo_url;
	}
	public void setArchivo_url(String archivo_url) {
		this.archivo_url = archivo_url;
	}
	
}
