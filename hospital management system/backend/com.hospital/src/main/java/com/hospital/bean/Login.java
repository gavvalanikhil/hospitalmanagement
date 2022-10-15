package com.hospital.bean;

import javax.persistence.Entity;
import javax.persistence.Id;
@Entity
public class Login {
	@Id
	private int id;
	private String emailid;
	private String password;
	private String role;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getEmailid() {
		return emailid;
	}
	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	@Override
	public String toString() {
		return "Login [id=" + id + ", emailid=" + emailid + ", password=" + password + ", role=" + role + "]";
	}
	
	

}
