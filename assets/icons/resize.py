from PIL import Image
import os

def ajustar_imagenes(carpeta_entrada, carpeta_salida, nuevo_tamano=(512, 512)):
    # Asegúrate de que la carpeta de salida exista
    if not os.path.exists(carpeta_salida):
        os.makedirs(carpeta_salida)

    # Obtiene la lista de nombres de archivos en la carpeta de entrada
    lista_imagenes = os.listdir(carpeta_entrada)

    for nombre_imagen in lista_imagenes:
        ruta_imagen_entrada = os.path.join(carpeta_entrada, nombre_imagen)
        ruta_imagen_salida = os.path.join(carpeta_salida, nombre_imagen)

        # Abre la imagen
        imagen = Image.open(ruta_imagen_entrada)

        # Escala la imagen manteniendo la proporción original
        imagen.thumbnail(nuevo_tamano, Image.ANTIALIAS)

        # Calcula las coordenadas para centrar la imagen en el nuevo tamaño
        x = (nuevo_tamano[0] - imagen.width) // 2
        y = (nuevo_tamano[1] - imagen.height) // 2

        # Crea una nueva imagen con fondo transparente del tamaño especificado
        imagen_nueva = Image.new('RGBA', nuevo_tamano, (0, 0, 0, 0))

        # Pega la imagen escalada en el centro de la nueva imagen
        imagen_nueva.paste(imagen, (x, y))

        # Guarda la imagen ajustada en la carpeta de salida
        imagen_nueva.save(ruta_imagen_salida)

if __name__ == "__main__":
    # Obtiene la ruta del script actual
    ruta_script = os.path.dirname(os.path.abspath(__file__))

    # Especifica la carpeta de entrada y la carpeta de salida
    carpeta_entrada = os.path.join(ruta_script, "borrar")
    carpeta_salida = os.path.join(ruta_script, "nueva3")

    # Redimensiona las imágenes y guárdalas en la carpeta de salida
    ajustar_imagenes(carpeta_entrada, carpeta_salida)