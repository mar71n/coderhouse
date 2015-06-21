// Creamos un objeto
var todo = {};

// Creamos una propiedad "list" con un array vacio
todo.list = [];

//** Metodo para ingresar una nueva tarea */
todo.add = function(event) {
    // leer el valor del input
    var task = $('input').val();
    if (task) {
        // Agregar la tarea al final del array
        todo.list[todo.list.length] = task;
        todo.refresh_list();
        // Limpiar el input
        $('input').val('');
    }
    event.preventDefault();
};

//** Metodo para remover la tarea seleccionada */
todo.remove = function() {
    // Remover el array y actualizar lista
    todo.list.splice(todo.selected,1);
    todo.refresh_list();
};

//** Re-crear la lista desde las tareas en el array */
todo.refresh_list = function() {
    var $tasks = $('#task_list'), i;
    // Clear the existing task list
    $tasks.empty();
    if (todo.list.length) {
        // Agregar encabezado
        $tasks.append('<li data-role="list-divider">Pendientes</li>');
        for (var i=0;i<todo.list.length;i++){
            // Agregar cada tarea
            var li = '<li><a data-task-id="' + i
                    + '" href="#confirm">' + todo.list[i] + '</a></li>'
            $tasks.append(li);
        }
    }
    // actualizar el listado
    $tasks.listview('refresh');
};

// Inicializar la pagina principal
$('#index').on('pageinit', function() {
    console.log('index.pageinit');

    // Vaciamos el array al iniciar la pagina
    // esto sucede solo una vez
    todo.list = [];

    // Asignamos el metodo todo.add al click de #add
    $('#add').on('click', todo.add);

    // Delegamos el evento click que suceda a cualquier
    // <a> dentro de un <li> dentro de #task_list
    $('#task_list').on('click', 'li a', function() {
        todo.selected = $(this).data('task-id');
    });

    // Asignar el metodo todo.refresh_list al evento
    // "pagebeforeshow" para que sea llamado
    // siempre antes de mostrar #index
    $('#index').on('pagebeforeshow', todo.refresh_list);
});

// Capturamos el evento click de los botones .remove_task
// Estos son los que marcan completado/no completado
$(document).on('pageinit', '#confirm', function(){
    $('.remove_task').on('click', todo.remove);
});