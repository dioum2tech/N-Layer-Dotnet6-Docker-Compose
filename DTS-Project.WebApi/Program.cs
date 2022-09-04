using AutoMapper;
using DTS_Project.Application.Configurations.Helpers;
using DTS_Project.WebApi.Configurations.CustomConfig;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCustomAuthentication(builder.Configuration);
builder.Services.AddAuthorization();
builder.Services.AddAutoMapper(typeof(AutoMapperProfile));
builder.Services.AddDependencyInjectionConfiguration(builder.Configuration);
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddCustomSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(options => {
        options.SwaggerEndpoint("/swagger/V1/swagger.json", "DTS Project WebAPI");
    });
}

app.UseHttpsRedirection();
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();
app.UseCors(x => x
        .AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader());
app.Run();
