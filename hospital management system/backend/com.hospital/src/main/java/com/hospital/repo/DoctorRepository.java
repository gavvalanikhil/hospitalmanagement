package com.hospital.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hospital.bean.Doctor;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Integer> {
	
	
	

}
