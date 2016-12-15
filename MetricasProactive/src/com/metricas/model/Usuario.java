package com.metricas.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "TblUsuario")
public class Usuario{

	@Id
	@Column(name = "Soeid")
	private String soeid;
	@Column(name = "GEID")
	private String geid;
	@Column(name = "Nomina")
	private int nomina;
	@Column(name = "Nombre")
	private String nombre;
	@Column(name = "Paterno")
	private String apellidoPaterno;
	@Column(name = "Materno")
	private String apellidoMaterno;
	@Column(name = "Telefono")
	private String telefono;
	@Column(name = "Celular")
	private String celular;
	@Column(name = "CorreoElectronico")
	private String correoElectronico;
	@Column(name = "Contraseña")
	private String contrasena;
	@Column(name = "FechaNacimiento")
	private String fechaNacimiento;
	@Column(name = "FechaActualizacion")
	private String fechaActualizacion;
	@Column(name = "FechaIngreso")
	private String fechaIngreso;
	@Column(name = "FechaBaja")
	private String fechaBaja;
	@Column(name = "PuestoSistema")
	private String puestoSistema;
	@Column(name = "PuestoReal")
	private String puestoReal;
	@Column(name = "SuperiorMatricial")
	private String superiorMatricial;
	@Column(name = "SuperiorInterno")
	private String superiorInterno;
	@Column(name = "idArea")
	private int area;
	@Column(name = "IdSubArea")
	private int subArea;
	@Column(name = "IdSegmento")
	private int segmento;
	@Column(name = "IdSIRH")
	private int sirh;
	@Column(name = "IdSede")
	private int sede;
	@Column(name = "IdEstatusBIO")
	private int estatusBio;
	@Column(name = "IdGradoEstudio")
	private int gradoEstudio;
	@Column(name = "EstatusGrado")
	private String estatusGrado;
	@Column(name = "TipoContrato")
	private String tipoContrato;
	@Column(name = "Proveedor")
	private String proveedor;
	@Column(name = "Eligibilidad")
	private String eligibilidad;
	@Column(name = "Activo")
	private int activo;
	@Column(name = "FechaRegistro")
	private String fechaRegistro;
	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "TblPermiso",
			joinColumns = {@JoinColumn(name = "Soeid")},
			inverseJoinColumns = {@JoinColumn(name = "IdPerfil")})
	private Set<Perfil> perfiles;
	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "TblUsuarioSegmento",
			joinColumns = {@JoinColumn(name = "Soeid")},
			inverseJoinColumns = {@JoinColumn(name = "Segmento")})
	private Set<Segmento> segmentos;
	
	public String getSoeid() {
		return soeid;
	}
	public void setSoeid(String soeid) {
		this.soeid = soeid;
	}
	public String getGeid() {
		return geid;
	}
	public void setGeid(String geid) {
		this.geid = geid;
	}
	public int getNomina() {
		return nomina;
	}
	public void setNomina(int nomina) {
		this.nomina = nomina;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getApellidoPaterno() {
		return apellidoPaterno;
	}
	public void setApellidoPaterno(String apellidoPaterno) {
		this.apellidoPaterno = apellidoPaterno;
	}
	public String getApellidoMaterno() {
		return apellidoMaterno;
	}
	public void setApellidoMaterno(String apellidoMaterno) {
		this.apellidoMaterno = apellidoMaterno;
	}
	public String getTelefono() {
		return telefono;
	}
	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}
	public String getCelular() {
		return celular;
	}
	public void setCelular(String celular) {
		this.celular = celular;
	}
	public String getCorreoElectronico() {
		return correoElectronico;
	}
	public void setCorreoElectronico(String correoElectronico) {
		this.correoElectronico = correoElectronico;
	}
	public String getContrasena() {
		return contrasena;
	}
	public void setContrasena(String contrasena) {
		this.contrasena = contrasena;
	}
	public String getFechaNacimiento() {
		return fechaNacimiento;
	}
	public void setFechaNacimiento(String fechaNacimiento) {
		this.fechaNacimiento = fechaNacimiento;
	}
	public String getFechaActualizacion() {
		return fechaActualizacion;
	}
	public void setFechaActualizacion(String fechaActualizacion) {
		this.fechaActualizacion = fechaActualizacion;
	}
	public String getFechaIngreso() {
		return fechaIngreso;
	}
	public void setFechaIngreso(String fechaIngreso) {
		this.fechaIngreso = fechaIngreso;
	}
	public String getFechaBaja() {
		return fechaBaja;
	}
	public void setFechaBaja(String fechaBaja) {
		this.fechaBaja = fechaBaja;
	}
	public String getPuestoSistema() {
		return puestoSistema;
	}
	public void setPuestoSistema(String puestoSistema) {
		this.puestoSistema = puestoSistema;
	}
	public String getPuestoReal() {
		return puestoReal;
	}
	public void setPuestoReal(String puestoReal) {
		this.puestoReal = puestoReal;
	}
	public String getSuperiorMatricial() {
		return superiorMatricial;
	}
	public void setSuperiorMatricial(String superiorMatricial) {
		this.superiorMatricial = superiorMatricial;
	}
	public String getSuperiorInterno() {
		return superiorInterno;
	}
	public void setSuperiorInterno(String superiorInterno) {
		this.superiorInterno = superiorInterno;
	}
	public int getArea() {
		return area;
	}
	public void setArea(int area) {
		this.area = area;
	}
	public int getSubArea() {
		return subArea;
	}
	public void setSubArea(int subArea) {
		this.subArea = subArea;
	}
	public int getSegmento() {
		return segmento;
	}
	public void setSegmento(int segmento) {
		this.segmento = segmento;
	}
	public int getSirh() {
		return sirh;
	}
	public void setSirh(int sirh) {
		this.sirh = sirh;
	}
	public int getSede() {
		return sede;
	}
	public void setSede(int sede) {
		this.sede = sede;
	}
	public int getEstatusBio() {
		return estatusBio;
	}
	public void setEstatusBio(int estatusBio) {
		this.estatusBio = estatusBio;
	}
	public int getGradoEstudio() {
		return gradoEstudio;
	}
	public void setGradoEstudio(int gradoEstudio) {
		this.gradoEstudio = gradoEstudio;
	}
	public String getEstatusGrado() {
		return estatusGrado;
	}
	public void setEstatusGrado(String estatusGrado) {
		this.estatusGrado = estatusGrado;
	}
	public String getTipoContrato() {
		return tipoContrato;
	}
	public void setTipoContrato(String tipoContrato) {
		this.tipoContrato = tipoContrato;
	}
	public String getProveedor() {
		return proveedor;
	}
	public void setProveedor(String proveedor) {
		this.proveedor = proveedor;
	}
	public String getEligibilidad() {
		return eligibilidad;
	}
	public void setEligibilidad(String eligibilidad) {
		this.eligibilidad = eligibilidad;
	}
	public int getActivo() {
		return activo;
	}
	public void setActivo(int activo) {
		this.activo = activo;
	}
	public String getFechaRegistro() {
		return fechaRegistro;
	}
	public void setFechaRegistro(String fechaRegistro) {
		this.fechaRegistro = fechaRegistro;
	}
	public Set<Perfil> getPerfiles(){
		return perfiles;
	}
	public void setPerfiles(Set<Perfil> perfiles){
		this.perfiles=perfiles;
	}
	public Set<Segmento> getSegmentos(){
		return segmentos;
	}
	public void setSegmentos(Set<Segmento> segmentos){
		this.segmentos=segmentos;
	}
	
	
	
}
