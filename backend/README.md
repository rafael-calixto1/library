### Project Overview

In this Spring project, I developed a library application using Spring Boot, Spring Data JPA, and Spring Data REST. The application facilitates CRUD operations on books stored in a MySQL database.

### BookRepository Interface

The `BookRepository` interface, extending `JpaRepository`, enables basic CRUD functionalities for the Book entity. Additionally, a custom method, `findByTitleContaining()`, supports partial title search and paginated results retrieval based on the title search term and a Pageable object.

### Customized REST Endpoints

For customization of Spring Data REST endpoints, the `MyDataRestConfig` class implements `RepositoryRestConfigurer`. This class overrides the `configureRepositoryRestConfiguration()` method, configuring CORS mapping, exposing ID properties for Book entities, and selectively disabling certain HTTP methods for Book entities.

### Book Entity Class

The `Book` entity class represents a book in the library application. Annotated with `@Entity` and `@Table`, it serves as a JPA entity with Lombok's `@Data` annotation for automated generation of getters, setters, and other methods. The entity class contains fields for storing book metadata (title, author, description, category, image) and inventory details (number of copies, copies available).

### Application Entry Point

The `SpringBootLibraryApplication` class, annotated with `@SpringBootApplication`, facilitates auto-configuration and component scanning. The `main()` method utilizes `SpringApplication.run()` to initialize the Spring application context.

### Project Configuration (pom.xml)

The project's `pom.xml` file manages Maven configurations. It includes dependencies for Spring Boot starter data JPA, data REST, MySQL connector, Lombok, and test dependencies. Additionally, it configures the Spring Boot Maven plugin for jar/war building and employs the Docker image builder `paketobuildpacks/builder-jammy-base`.

### Conclusion

This project provided hands-on experience in developing a Spring Boot library application, leveraging Spring Data JPA and Spring Data REST for CRUD operations, customizing REST endpoints, and integrating with a MySQL database.
