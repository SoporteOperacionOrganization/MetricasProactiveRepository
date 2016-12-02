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
@Table(name = "TblSegmento")
public class Segmento {

	@Id
	@GeneratedValue
	@Column(name = "IdSegmento")
	private int id;
	@Column(name = "Segmento")
	private String nombre;
	@Column(name = "Activo")
	private int activo;
	@ManyToMany(mappedBy = "segmentos", cascade = CascadeType.ALL)
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
	
	public int getActivo() {
		return activo;
	}
	public void setActivo(int activo) {
		this.activo = activo;
	}
	
	@Override
	public String toString(){
		return "Nombre: " + nombre + " Activo: " + activo;
	}
	
}
