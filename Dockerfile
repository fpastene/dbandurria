# Usa una imagen base de Nginx
FROM nginx:alpine

# Copia los archivos de tu página web al directorio de Nginx
COPY . /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# El comando por defecto de Nginx ya es el adecuado para servir los archivos
CMD ["nginx", "-g", "daemon off;"]