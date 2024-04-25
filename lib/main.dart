import 'package:cuentame_mas/config/theme/app_theme.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const CuentameMas());
}

class CuentameMas extends StatelessWidget {
  const CuentameMas({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Cuentame +',
      theme: AppTheme().getTheme(),
      home: const MyHomePage(title: 'Cuentame +'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key, required this.title}) : super(key: key);

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        titleSpacing: 0,
        title: Row(
          children: [
            // Logo de la aplicación
            Padding(
              padding: const EdgeInsets.only(left: 16.0),
              child: Image.asset(
                'assets/logo.png',
                width: 50,
                height: 50,
              ),
            ),
            const SizedBox(width: 10),
            // Título de la aplicación
            const Text(
              'Cuentame +',
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            ),

            const Padding(padding: EdgeInsets.symmetric(horizontal: 20)),
            if (MediaQuery.of(context).size.width > 888)
              Row(
                children: [
                  TextButton(
                      onPressed: () {},
                      child: const Text(
                        "Preguntas Frecuentes",
                        style: TextStyle(fontWeight: FontWeight.bold),
                      )),
                  const SizedBox(
                    width: 20,
                  ),
                  TextButton(
                      onPressed: () {},
                      child: const Text(
                        "Terminos y Condiciones",
                        style: TextStyle(fontWeight: FontWeight.bold),
                      )),
                  const SizedBox(
                    width: 20,
                  ),
                  TextButton(
                      onPressed: () {},
                      child: const Text(
                        "Politicas de Privacidad",
                        style: TextStyle(fontWeight: FontWeight.bold),
                      )),
                ],
              ),
          ],
        ),
        actions: [
          // Botón de iniciar sesión solo en escritorio
          if (MediaQuery.of(context).size.width > 600)
            Padding(
              padding: const EdgeInsets.only(right: 16.0),
              child: TextButton(
                onPressed: () {
                  // Acción del botón
                },
                child: const Text(
                  'Iniciar Sesión',
                  style: TextStyle(color: Colors.black),
                ),
              ),
            ),
          // Botón de menú
          if (MediaQuery.of(context).size.width < 600)
            IconButton(
              icon: const Icon(Icons.menu),
              onPressed: () {
                Scaffold.of(context).openDrawer();
              },
            ),
        ],
      ),
      drawer: MediaQuery.of(context).size.width < 880
          ? Drawer(
              child: ListView(
                padding: EdgeInsets.zero,
                children: <Widget>[
                  const DrawerHeader(
                    child: Text(
                      'Menú',
                      style: TextStyle(color: Colors.white, fontSize: 20),
                    ),
                  ),
                  ListTile(
                    title: const Text('Preguntas Frecuentes'),
                    onTap: () {
                      // Acciones de la ruta
                    },
                  ),
                  ListTile(
                    title: const Text('Términos y Condiciones'),
                    onTap: () {
                      // Acciones de la ruta
                    },
                  ),
                  ListTile(
                    title: const Text('Políticas de Privacidad'),
                    onTap: () {
                      // Acciones de la ruta
                    },
                  ),
                ],
              ),
            )
          : null,
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            const SizedBox(height: 20.0),
            // Texto y logo en la mitad de la página
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                Expanded(
                  child: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 50.0),
                    child: Text(
                      'Resuelve tus dudas sobre educación financiera con Cuentame +',
                      textAlign: TextAlign.start,
                      style: TextStyle(
                        fontSize: MediaQuery.of(context).size.width > 1000
                            ? 72.0
                            : 36.0,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                ),
                Expanded(
                  child: Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 20.0),
                      child: MediaQuery.of(context).size.width > 600
                          ? Image.asset('assets/logo.png',
                              width: 200, height: 200)
                          : Column(
                              children: [
                                SizedBox(height: 20),
                                Image.asset('assets/logo.png',
                                    width: 200, height: 200),
                              ],
                            )),
                ),
              ],
            ),
            const SizedBox(height: 20.0),
            // Botones en la parte inferior
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 20.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  ElevatedButton(
                    onPressed: () {
                      // Acción del botón
                    },
                    child: const Text('Registrate'),
                  ),
                  const SizedBox(height: 10.0),
                  OutlinedButton(
                    onPressed: () {
                      // Acción del botón
                    },
                    child: const Text('Ingresar como invitado'),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 50.0),
            // Curva de fondo
            Stack(
              children: [
                Container(
                  height: 200.0,
                  decoration: const BoxDecoration(
                    color: Colors.pink,
                    borderRadius: BorderRadius.only(
                      topLeft: Radius.circular(200.0),
                      topRight: Radius.circular(200.0),
                    ),
                  ),
                ),
                Positioned(
                  bottom: 0,
                  left: MediaQuery.of(context).size.width / 2 - 50,
                  child: const Text(
                    'Qué es Cuentame +',
                    style: TextStyle(
                      fontSize: 24.0,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 20.0),
            // Columnas de iconos y textos
            MediaQuery.of(context).size.width > 600
                ? Row(
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: [
                      Column(
                        children: const [
                          Icon(Icons.ac_unit),
                          Text('Texto 1'),
                        ],
                      ),
                      Column(
                        children: const [
                          Icon(Icons.access_alarm),
                          Text('Texto 2'),
                        ],
                      ),
                    ],
                  )
                : Column(
                    children: [
                      Column(
                        children: [
                          const Icon(Icons.ac_unit),
                          const Text('Texto 1'),
                        ],
                      ),
                      const SizedBox(height: 20.0),
                      Column(
                        children: [
                          const Icon(Icons.access_alarm),
                          const Text('Texto 2'),
                        ],
                      ),
                    ],
                  ),
          ],
        ),
      ),
    );

    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    /* return Scaffold(
      appBar: AppBar(
        // Here we take the value from the MyHomePage object that was created by
        // the App.build method, and use it to set our appbar title.

        title: Text(widget.title),
      ),
      body: Center(
        // Center is a layout widget. It takes a single child and positions it
        // in the middle of the parent.
        child: Column(
          // Column is also a layout widget. It takes a list of children and
          // arranges them vertically. By default, it sizes itself to fit its
          // children horizontally, and tries to be as tall as its parent.
          //
          // Invoke "debug painting" (press "p" in the console, choose the
          // "Toggle Debug Paint" action from the Flutter Inspector in Android
          // Studio, or the "Toggle Debug Paint" command in Visual Studio Code)
          // to see the wireframe for each widget.
          //
          // Column has various properties to control how it sizes itself and
          // how it positions its children. Here we use mainAxisAlignment to
          // center the children vertically; the main axis here is the vertical
          // axis because Columns are vertical (the cross axis would be
          // horizontal).
          children: <Widget>[
            Row(
              children: const <Widget>[
                Text(
                  'Obten respuestas ',
                  overflow: TextOverflow.ellipsis,
                  maxLines: 2,
                  textAlign: TextAlign.center,
                  style: TextStyle(fontSize: 20),
                  softWrap: true,
                ),
                Image(
                  image: AssetImage('assets/logo.png'),
                  width: 50,
                  height: 50,
                )
              ],
            ),
            SizedBox(
              height: 15,
            ),
            Row(
              children: [
                ElevatedButton(
                  onPressed: () {},
                  child: const Text('Registrate'),
                ),
                SizedBox(
                  width: 15,
                ),
                ElevatedButton(
                  onPressed: () {},
                  child: const Text('Ingresar como invitado'),
                )
              ],
            ),
            Text("Que es Cuentame + ?"),
            SizedBox(
              height: 15,
            ),
            Row(
              children: [
                Column(
                  children: [
                    Icon(Icons.savings_rounded),
                  ],
                )
              ],
            )
          ],
        ),
      ),
    ); */
  }
}
