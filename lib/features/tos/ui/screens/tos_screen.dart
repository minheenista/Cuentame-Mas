import 'package:flutter/material.dart';

class TosScreen extends StatelessWidget {
  const TosScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return const _TosScreen();
  }
}

class _TosScreen extends StatelessWidget {
  const _TosScreen({
    Key? key,
  }) : super(key: key);

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
                      Navigator.of(context).pushNamed('/');
                    },
                  ),
                  ListTile(
                    leading: const Icon(Icons.question_answer_rounded,
                        color: Color(0xff292929)),
                    title: const Text(
                      'Preguntas Frecuentes',
                      style: TextStyle(color: Color(0xff292929)),
                    ),
                    onTap: () {
                      // Acciones de la ruta
                      Navigator.of(context).pushNamed('/faq');
                    },
                  ),
                  ListTile(
                    tileColor: const Color.fromARGB(255, 219, 135, 131),
                    leading:
                        const Icon(Icons.article_rounded, color: Colors.white),
                    title: const Text(
                      'Términos y Condiciones',
                      style: TextStyle(color: Colors.white),
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
          child: Column(
        children: [
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 40),
            child: Column(
              children: [
                const SizedBox(height: 20),
                const Text(
                  "Terminos y Condiciones de Uso",
                  style: TextStyle(fontSize: 30, fontWeight: FontWeight.bold),
                ),
                /* SizedBox(height: 20),
                Text(
                  "Última actualización: 1 de enero de 2022",
                  style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                  textAlign: TextAlign.left,
                ), */
                const SizedBox(height: 20),
                const Text(
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat erat ut finibus tincidunt. Duis vel convallis ex, maximus tempus augue. Etiam imperdiet mattis est, eu scelerisque orci tempor rutrum. Proin malesuada eros tempus commodo dapibus. In magna augue, vehicula eu porta in, mollis non neque. Praesent eget enim ac dui pellentesque congue at et mi. Fusce varius sagittis egestas. Maecenas pellentesque mattis felis ut cursus. Donec pretium faucibus ultrices. Morbi in dignissim justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin pulvinar dolor vel lorem pretium, sed aliquet magna pretium. Vestibulum commodo nisi quis leo tempus dignissim. Proin ornare, lectus et ultricies sodales, massa nisl laoreet elit, ut dictum massa tortor in ipsum. Donec finibus felis nec tortor venenatis euismod. Morbi consequat eget risus ac condimentum."),
                const SizedBox(height: 20),
                const Text(
                    "Pellentesque nec urna vitae enim tempor congue ac id arcu. Suspendisse pulvinar vel lectus quis egestas. Duis ipsum libero, sodales at lacus vel, sollicitudin pharetra orci. Etiam laoreet ultricies libero, ut finibus orci auctor eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In nunc turpis, fringilla non turpis eget, fringilla pretium diam. In semper lorem dignissim, egestas nisl ac, eleifend turpis. Proin in orci sed elit facilisis efficitur et vel ex."),
                const SizedBox(height: 20),
                Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: const [
                    Text(
                      "Vestibulum facilisis fringilla",
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 20),
                const Text(
                    "Pellentesque nec urna vitae enim tempor congue ac id arcu. Suspendisse pulvinar vel lectus quis egestas. Duis ipsum libero, sodales at lacus vel, sollicitudin pharetra orci. Etiam laoreet ultricies libero, ut finibus orci auctor eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In nunc turpis, fringilla non turpis eget, fringilla pretium diam. In semper lorem dignissim, egestas nisl ac, eleifend turpis. Proin in orci sed elit facilisis efficitur et vel ex."),
                const SizedBox(height: 20),
                const Text(
                    "Pellentesque nec urna vitae enim tempor congue ac id arcu. Suspendisse pulvinar vel lectus quis egestas. Duis ipsum libero, sodales at lacus vel, sollicitudin pharetra orci. Etiam laoreet ultricies libero, ut finibus orci auctor eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In nunc turpis, fringilla non turpis eget, fringilla pretium diam. In semper lorem dignissim, egestas nisl ac, eleifend turpis. Proin in orci sed elit facilisis efficitur et vel ex."),
                const SizedBox(height: 20),
                const Text(
                    "Pellentesque nec urna vitae enim tempor congue ac id arcu. Suspendisse pulvinar vel lectus quis egestas. Duis ipsum libero, sodales at lacus vel, sollicitudin pharetra orci. Etiam laoreet ultricies libero, ut finibus orci auctor eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In nunc turpis, fringilla non turpis eget, fringilla pretium diam. In semper lorem dignissim, egestas nisl ac, eleifend turpis. Proin in orci sed elit facilisis efficitur et vel ex."),
              ],
            ),
          ),
          const SizedBox(height: 20),
          Container(
            height: 50.0,
            color: const Color(0xffF09D99),
          )
        ],
      )),
    );
  }
}
