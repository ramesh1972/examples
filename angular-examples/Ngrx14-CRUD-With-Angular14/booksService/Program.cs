using System.Text.Json;

internal class Program
{
    private static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.
        // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
        builder.Services.AddCors(options =>
        {
            options.AddPolicy("AllowSpecificOrigins",
               builder =>
               {
                            builder.WithOrigins("http://localhost:4200")
                                   .AllowAnyHeader()
                                   .AllowAnyMethod();
                        });
        });

        var app = builder.Build();


        app.UseHttpsRedirection();

        app.MapGet("/books", () =>
        {
            return Book.getDummyBooks();
        });

        app.MapPost("/books", (Book book) =>
        {
            book.id = Book.getDummyBooks().Length + 1;
            return book;
        });

        app.UseCors("AllowSpecificOrigins");
        app.Run();
    }
}

record class Book {
  public int id {get; set;}
  public string? name {get; set;}
  public string? author {get; set;}
  public int cost {get; set;}

  public Book(int id, string name, string author, int cost) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.cost = cost;
  }

  public  static Book[] getDummyBooks() {
    Book[] books = new Book[3];
    books[0] = new Book(1, "Book1", "Author1", 100);
    books[1] = new Book(2, "Book2", "Author2", 200);
    books[2] = new Book(3, "Book3", "Author3", 300);

    return books;
  }

  public static string getDummyBooksJson() {

    return JsonSerializer.Serialize(getDummyBooks());
  }
}

