package com.dsenvolvendosistemas.springbootlibrary.dao;

import com.dsenvolvendosistemas.springbootlibrary.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {

}
