# Node.js Client Websocket

Esta es una aplicación Node.js básica para conectarse y consumir mensajes a través del servicio de websockets del Core de Deliverar.

En este ejemplo, la aplicación se está conectando como si fuera el módulo cliente. Tener en cuenta modificar la [siguiente línea](https://github.com/roccacamila/nodeclient-websocket/blob/main/app.js#L13) y reemplazar `/cliente` por el módulo que corresponda.

Dejamos como ayuda un listado con cómo quedaría modificada esta línea para cada uno de los equipos.
### Listado de conexiones por módulo

Módulo | Conexión
--- | --- |
Cliente | `stompClient.send("/app/cliente");` |
Proveedor | `stompClient.send("/app/proveedor");;` |
Repartidor | `stompClient.send("/app/repartidor");` |
Franquicia | `stompClient.send("/app/franquicia");` |
Operador | `stompClient.send("/app/operador");` |
Partners | `stompClient.send("/app/partners");` |
Desarrollo interno | `stompClient.send("/app/desarrolloInterno");` |
Administrador | `stompClient.send("/app/administrador");` |

*De necesitar asistencia extra o más información, contactarse con el Team Core.*
