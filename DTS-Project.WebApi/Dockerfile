#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["DTS-Project.WebApi/DTS-Project.WebApi.csproj", "DTS-Project.WebApi/"]
RUN dotnet restore "DTS-Project.WebApi/DTS-Project.WebApi.csproj"
COPY . .
WORKDIR "/src/DTS-Project.WebApi"
RUN dotnet build "DTS-Project.WebApi.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "DTS-Project.WebApi.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "DTS-Project.WebApi.dll"]