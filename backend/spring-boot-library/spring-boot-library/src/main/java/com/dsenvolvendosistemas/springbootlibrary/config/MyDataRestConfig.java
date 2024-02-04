package com.dsenvolvendosistemas.springbootlibrary.config;

import com.dsenvolvendosistemas.springbootlibrary.entity.Book;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class MyDataRestConfig implements RepositoryRestConfigurer, WebMvcConfigurer {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        config.exposeIdsFor(Book.class);

        // Configure CORS mapping
        cors.addMapping(config.getBasePath() + "/*")
                .allowedOrigins("*"); // Allow requests from any origin (for testing purposes)
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Configure global CORS settings
        registry.addMapping("/**")
                .allowedOrigins("*") // Allow requests from any origin (for testing purposes)
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowCredentials(true)
                .maxAge(3600);
    }
}
