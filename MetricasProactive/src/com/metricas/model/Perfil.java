package com.metricas.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "TblPerfil")
public class Perfil {

	@Id
	@Column(name = "IdPerfil")
	private int id;
	@Column(name = "NombrePerfil")
	private String nombre;
	@Column(name = "FechaAltaPerfil")
	private String fechaAltaPerfil;
	@Column(name = "Activo")
	private int activo;
	@Column(name = "IdHerramienta")
	private int idHerramienta;
	@ManyToMany(mappedBy = "perfiles", cascade = CascadeType.ALL)
	private Set<Usuario> usuarios;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getFechaAltaPerfil() {
		return fechaAltaPerfil;
	}
	public void setFechaAltaPerfil(String fechaAltaPerfil) {
		this.fechaAltaPerfil = fechaAltaPerfil;
	}
	public int getActivo() {
		return activo;
	}
	public void setActivo(int activo) {
		this.activo = activo;
	}
	public int getIdHerramienta() {
		return idHerramienta;
	}
	public void setIdHerramienta(int idHerramienta) {
		this.idHerramienta = idHerramienta;
	}
	public Set<Usuario> getUsuarios(){
		return usuarios;
	}
	public void setUsuarios(Set<Usuario> usuarios){
		this.usuarios=usuarios;
	}
	
	
}
