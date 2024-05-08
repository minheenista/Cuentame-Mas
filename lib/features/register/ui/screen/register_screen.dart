import 'package:flutter/material.dart';

class RegisterScreen extends StatefulWidget {
  const RegisterScreen({super.key});

  @override
  State<RegisterScreen> createState() => _RegisterScreenState();
}

class _RegisterScreenState extends State<RegisterScreen> {
  bool isPasswordVisible = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: const Color(0xffF09D99),
        titleSpacing: 0,
        title: Row(
          children: [
            // Logo de la aplicación
            Padding(
              padding: const EdgeInsets.only(
                left: 16.0,
              ),
              child: Image.asset(
                'assets/logojpg.png',
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
                      onPressed: () {
                        Navigator.of(context).pushNamed('/faq');
                      },
                      child: const Text(
                        "Preguntas Frecuentes",
                        style: TextStyle(
                            fontWeight: FontWeight.bold,
                            color: Color(0xff292929)),
                      )),
                  const SizedBox(
                    width: 20,
                  ),
                  TextButton(
                      onPressed: () {
                        Navigator.of(context).pushNamed('/tos');
                      },
                      child: const Text(
                        "Terminos y Condiciones",
                        style: TextStyle(
                            fontWeight: FontWeight.bold,
                            color: Color(0xff292929)),
                      )),
                  const SizedBox(
                    width: 20,
                  ),
                  TextButton(
                      onPressed: () {
                        Navigator.of(context).pushNamed('/privacy');
                      },
                      child: const Text(
                        "Politicas de Privacidad",
                        style: TextStyle(
                            fontWeight: FontWeight.bold,
                            color: Color(0xff292929)),
                      )),
                ],
              ),
          ],
        ),
        actions: [
          // Botón de iniciar sesión solo en escritorio
          if (MediaQuery.of(context).size.width > 880)
            Padding(
              padding: const EdgeInsets.only(
                  right: 16.0, top: 10.0, bottom: 10.0, left: 20.0),
              child: TextButton(
                onPressed: () {
                  // Acción del botón
                  Navigator.of(context).pushNamed('/login');
                },
                style: ButtonStyle(
                  backgroundColor: MaterialStateProperty.all<Color>(
                      const Color(0xff292929)), // Color de fondo
                  shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                    RoundedRectangleBorder(
                      borderRadius:
                          BorderRadius.circular(200.0), // Radio de los bordes
                    ),
                  ),
                ),
                child: const Text(
                  'Iniciar Sesión',
                  style: TextStyle(color: Colors.white),
                ),
              ),
            ),
        ],
      ),
      endDrawer: MediaQuery.of(context).size.width < 940
          ? Drawer(
              backgroundColor: const Color(0xffF09D99),
              child: ListView(
                padding: EdgeInsets.zero,
                children: <Widget>[
                  DrawerHeader(
                    child: Container(
                      alignment: Alignment.centerLeft,
                      child: Column(
                        children: const [
                          Image(
                            image: AssetImage('assets/logojpg.png'),
                            height: 89,
                            alignment: Alignment.centerLeft,
                          ),
                          Text(
                            'Cuentame +',
                            style: TextStyle(
                                color: Colors.white,
                                fontSize: 32,
                                fontWeight: FontWeight.bold),
                          ),
                        ],
                      ),
                    ),
                  ),
                  ListTile(
                    leading: const Icon(Icons.home_rounded,
                        color: Color(0xff292929)),
                    title: const Text(
                      'Menu Principal',
                      style: TextStyle(color: Color(0xff292929)),
                    ),
                    onTap: () {
                      // Acciones de la ruta
                    },
                  ),
                  ListTile(
                    tileColor: const Color.fromARGB(255, 219, 135, 131),
                    leading: const Icon(Icons.question_answer_rounded,
                        color: Colors.white),
                    title: const Text(
                      'Preguntas Frecuentes',
                      style: TextStyle(color: Colors.white),
                    ),
                    onTap: () {
                      // Acciones de la ruta
                      Navigator.of(context).pushNamed('/faq');
                    },
                  ),
                  ListTile(
                    leading: const Icon(Icons.article_rounded,
                        color: Color(0xff292929)),
                    title: const Text(
                      'Términos y Condiciones',
                      style: TextStyle(color: Color(0xff292929)),
                    ),
                    onTap: () {
                      // Acciones de la ruta
                      Navigator.of(context).pushNamed('/tos');
                    },
                  ),
                  ListTile(
                    leading: const Icon(Icons.privacy_tip_rounded,
                        color: Color(0xff292929)),
                    title: const Text(
                      'Políticas de Privacidad',
                      style: TextStyle(color: Color(0xff292929)),
                    ),
                    onTap: () {
                      // Acciones de la ruta
                      Navigator.of(context).pushNamed('/privacy');
                    },
                  ),
                  const SizedBox(
                    height: 250,
                  ),
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 30),
                    child: TextButton(
                      onPressed: () {
                        // Acción del botón
                        Navigator.of(context).pushNamed('/login');
                      },
                      style: ButtonStyle(
                        backgroundColor: MaterialStateProperty.all<Color>(
                            const Color(0xff292929)), // Color de fondo
                        shape:
                            MaterialStateProperty.all<RoundedRectangleBorder>(
                          RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(
                                200.0), // Radio de los bordes
                          ),
                        ),
                      ),
                      child: const Text(
                        'Iniciar Sesión',
                        style: TextStyle(color: Colors.white),
                      ),
                    ),
                  ),
                ],
              ),
            )
          : null,
      body: SingleChildScrollView(
          child: Container(
        color: const Color(0xffFCBCB8),
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 60.0, vertical: 80.0),
          child: ConstrainedBox(
            constraints: const BoxConstraints(maxWidth: 600),
            child: Card(
              color: Colors.white,
              child: Column(
                children: [
                  const SizedBox(
                    height: 20,
                  ),
                  Image.asset(
                    "assets/logo.png",
                    height: 100,
                    width: 100,
                  ),
                  const Text(
                    "Registro de usuario",
                    style: TextStyle(
                        fontSize: 20,
                        fontWeight: FontWeight.bold,
                        color: Color(0xffF09D99)),
                  ),
                  const SizedBox(
                    height: 30,
                  ),
                  Padding(
                    padding: const EdgeInsets.symmetric(
                      horizontal: 20,
                    ),
                    child: SizedBox(
                      width: 300,
                      child: Column(
                        children: [
                          TextField(
                            decoration: InputDecoration(
                              prefixIcon: const Icon(Icons.person_rounded),
                              prefixIconColor: const Color(0xffF09D99),
                              focusedBorder: OutlineInputBorder(
                                borderRadius: BorderRadius.circular(20),
                                borderSide: const BorderSide(
                                  color: Color(0xffF09D99),
                                  width: 2,
                                ), // Color del borde cuando está habilitado
                              ),
                              enabledBorder: OutlineInputBorder(
                                borderRadius: BorderRadius.circular(20),
                                borderSide: const BorderSide(
                                    color: Color(0xffF09D99),
                                    width:
                                        2), // Color del borde cuando está habilitado
                              ),
                              labelText: "Nombre de usuario",
                              border: OutlineInputBorder(
                                borderRadius: BorderRadius.circular(20),
                              ),
                            ),
                          ),
                          const SizedBox(
                            height: 20,
                          ),
                          TextField(
                            obscureText: !isPasswordVisible,
                            decoration: InputDecoration(
                              prefixIcon: const Icon(Icons.lock_rounded),
                              prefixIconColor: const Color(0xffF09D99),
                              suffixIcon: IconButton(
                                  onPressed: () {
                                    setState(() {
                                      isPasswordVisible = !isPasswordVisible;
                                    });
                                  },
                                  icon: Icon(isPasswordVisible
                                      ? Icons.visibility_off_rounded
                                      : Icons.visibility_rounded)),
                              labelText: 'Contraseña',
                              focusedBorder: OutlineInputBorder(
                                borderRadius: BorderRadius.circular(20),
                                borderSide: const BorderSide(
                                    color: Color(0xffF09D99),
                                    width:
                                        2), // Color del borde cuando está habilitado
                              ),
                              enabledBorder: OutlineInputBorder(
                                borderRadius: BorderRadius.circular(20),
                                borderSide: const BorderSide(
                                    color: Color(0xffF09D99),
                                    width:
                                        2), // Color del borde cuando está habilitado
                              ),
                              border: OutlineInputBorder(
                                borderRadius: BorderRadius.circular(20),
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                  const SizedBox(
                    height: 10,
                  ),
                  TextButton(
                    onPressed: () {},
                    child: const Text("¿Ya tienes una cuenta? Inicia"),
                  ),
                  const SizedBox(
                    height: 25,
                  ),
                  ElevatedButton(
                    style: ElevatedButton.styleFrom(
                        primary: const Color(0xff292929)),
                    onPressed: () {},
                    child: const Text("Iniciar sesión",
                        style: TextStyle(color: Colors.white)),
                  ),
                  const SizedBox(
                    height: 30,
                  ),
                  TextButton(
                    onPressed: () {},
                    child: const Text(
                      "O ingresa como invitado",
                      style: TextStyle(color: Color(0xff959595)),
                    ),
                  ),
                  const SizedBox(
                    height: 30,
                  )
    
                  /* Form(
                    autovalidateMode: AutovalidateMode.always,
                    child: Column(
                      children: [
                        TextField(
                          controller: _userController,
                          decoration: const InputDecoration(
                            labelText: "Nombre de usuario",
                            hintText: "Correo",
                            prefixIcon: Icon(Icons.person_rounded),
                          ),
                        ),
                        TextField(
                          controller: _passwordController,
                          decoration: const InputDecoration(
                            labelText: "Contraseña",
                            hintText: "Contraseña",
                            prefixIcon: Icon(Icons.lock_rounded),
                          ),
                        ),
                        
                        /* TextButton(
                      onPressed: () {},
                      child: Text("¿Olvidaste tu contraseña?"),
                    ), */
                        
                      ],
                    ),
                  ) */
                ],
              ),
            ),
          ),
        ),
      )),
    );
  }
}
