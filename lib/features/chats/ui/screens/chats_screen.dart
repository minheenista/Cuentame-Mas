import 'package:flutter/material.dart';

class ChatsScreens extends StatelessWidget {
  const ChatsScreens({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: MediaQuery.of(context).size.width < 800
          ? AppBar(
              title: Row(children: [
                Image.asset('assets/logojpg.png', width: 50, height: 50),
                const SizedBox(width: 20),
                const Text(
                  "Cuéntame + ",
                  style: TextStyle(
                    fontSize: 20,
                    color: Colors.white,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ]),
              backgroundColor: const Color(0xFFFCBCB8),
              leading: Builder(
                builder: (BuildContext context) {
                  return IconButton(
                    icon: const Icon(Icons.menu),
                    onPressed: () {
                      Scaffold.of(context).openDrawer();
                    },
                  );
                },
              ),
            )
          : null,
      drawer: Drawer(
        backgroundColor: const Color(0xFFFCBCB8),
        child: Column(
          mainAxisAlignment: MainAxisAlignment
              .spaceBetween, // Alinea el contenido con espacio entre ellos
          children: [
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Padding(
                  padding: const EdgeInsets.symmetric(vertical: 10),
                  child: Row(
                    children: [
                      Image.asset('assets/logojpg.png', width: 50, height: 50),
                      const SizedBox(width: 20),
                      const Text(
                        "Cuéntame + ",
                        style: TextStyle(
                          fontSize: 32,
                          color: Colors.white,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ],
                  ),
                ),
                const Divider(color: Color.fromARGB(120, 179, 179, 179)),
                TextButton.icon(
                  style: const ButtonStyle(
                    alignment: Alignment.centerLeft,
                  ),
                  onPressed: () {},
                  icon: const Icon(
                    Icons.add_rounded,
                    color: Colors.black,
                  ),
                  label: const Text(
                    "Nueva conversación",
                    style: TextStyle(
                      color: Colors.black,
                    ),
                  ),
                ),
                const Divider(color: Color.fromARGB(120, 179, 179, 179)),
                const Text(
                  "Conversaciones",
                  style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
                ),
                ListTile(
                  title: const Text('¿Qué es el rfc?'),
                  trailing: PopupMenuButton(
                    icon: const Icon(Icons.more_horiz_rounded,
                        color: Colors.black),
                    itemBuilder: (context) => [
                      const PopupMenuItem(
                        child: Text('Eliminar'),
                      ),
                      const PopupMenuItem(
                        child: Text('Editar'),
                      ),
                    ],
                  ),
                  onTap: () {
                    Navigator.pushNamed(context, '/status');
                  },
                ),
                ListTile(
                  title: const Text('¿Qué es situación fiscal?'),
                  trailing: PopupMenuButton(
                    icon: const Icon(Icons.more_horiz_rounded,
                        color: Colors.black),
                    itemBuilder: (context) => [
                      const PopupMenuItem(
                        child: Text('Eliminar'),
                      ),
                      const PopupMenuItem(
                        child: Text('Editar'),
                      ),
                    ],
                  ),
                  onTap: () {
                    Navigator.pushNamed(context, '/status');
                  },
                ),
                ListTile(
                  title: const Text('¿Cómo funciona el crédito?'),
                  trailing: PopupMenuButton(
                    icon: const Icon(Icons.more_horiz_rounded,
                        color: Colors.black),
                    itemBuilder: (context) => [
                      const PopupMenuItem(
                        child: Text('Eliminar'),
                      ),
                      const PopupMenuItem(
                        child: Text('Editar'),
                      ),
                    ],
                  ),
                  onTap: () {
                    Navigator.pushNamed(context, '/status');
                  },
                ),
                ListTile(
                  title: const Text('¿Para qué sirve la firma electronica'),
                  trailing: PopupMenuButton(
                    icon: const Icon(Icons.more_horiz_rounded,
                        color: Colors.black),
                    itemBuilder: (context) => [
                      const PopupMenuItem(
                        child: Text('Eliminar'),
                      ),
                      const PopupMenuItem(
                        child: Text('Editar'),
                      ),
                    ],
                  ),
                  onTap: () {
                    Navigator.pushNamed(context, '/status');
                  },
                ),
              ],
            ),
            // Aquí está el último ListTile que se mostrará en la parte inferior del Drawer
            ListTile(
              trailing: Icon(Icons.settings_rounded, color: Colors.black),
              title: Text("Nombre de usuario"),
              leading: Image.asset("assets/avatar.png", width: 40, height: 40),
            ),
          ],
        ),
      ),
      body: LayoutBuilder(
        builder: (BuildContext context, BoxConstraints constraints) {
          if (constraints.maxWidth > 800) {
            return Row(
              children: [
                Padding(
                  padding: const EdgeInsets.only(
                      left: 16.0, top: 16.0, bottom: 16.0),
                  child: Container(
                    width: 300,
                    color: const Color(0xFFFCBCB8),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment
                          .spaceBetween, // Alinea el contenido con espacio entre ellos
                      children: [
                        Padding(
                          padding: const EdgeInsets.all(8.0),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Padding(
                                padding:
                                    const EdgeInsets.symmetric(vertical: 10),
                                child: Row(
                                  children: [
                                    Image.asset('assets/logojpg.png',
                                        width: 50, height: 50),
                                    const SizedBox(width: 20),
                                    const Text(
                                      "Cuéntame + ",
                                      style: TextStyle(
                                        fontSize: 32,
                                        color: Colors.white,
                                        fontWeight: FontWeight.bold,
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                              const Divider(
                                  color: Color.fromARGB(120, 179, 179, 179)),
                              TextButton.icon(
                                style: const ButtonStyle(
                                  alignment: Alignment.centerLeft,
                                ),
                                onPressed: () {},
                                icon: const Icon(
                                  Icons.add_rounded,
                                  color: Colors.black,
                                ),
                                label: const Text(
                                  "Nueva conversación",
                                  style: TextStyle(
                                    color: Colors.black,
                                  ),
                                ),
                              ),
                              const Divider(
                                  color: Color.fromARGB(120, 179, 179, 179)),
                              const Text(
                                "Conversaciones",
                                style: TextStyle(
                                    fontWeight: FontWeight.bold, fontSize: 16),
                              ),
                              ListTile(
                                title: const Text('¿Qué es el rfc?'),
                                trailing: PopupMenuButton(
                                  icon: const Icon(Icons.more_horiz_rounded,
                                      color: Colors.black),
                                  itemBuilder: (context) => [
                                    const PopupMenuItem(
                                      child: Text('Eliminar'),
                                    ),
                                    const PopupMenuItem(
                                      child: Text('Editar'),
                                    ),
                                  ],
                                ),
                                onTap: () {
                                  Navigator.pushNamed(context, '/status');
                                },
                              ),
                              ListTile(
                                title: const Text('¿Qué es situación fiscal?'),
                                trailing: PopupMenuButton(
                                  icon: const Icon(Icons.more_horiz_rounded,
                                      color: Colors.black),
                                  itemBuilder: (context) => [
                                    const PopupMenuItem(
                                      child: Text('Eliminar'),
                                    ),
                                    const PopupMenuItem(
                                      child: Text('Editar'),
                                    ),
                                  ],
                                ),
                                onTap: () {
                                  Navigator.pushNamed(context, '/status');
                                },
                              ),
                              ListTile(
                                title: const Text('¿Cómo funciona el crédito?'),
                                trailing: PopupMenuButton(
                                  icon: const Icon(Icons.more_horiz_rounded,
                                      color: Colors.black),
                                  itemBuilder: (context) => [
                                    const PopupMenuItem(
                                      child: Text('Eliminar'),
                                    ),
                                    const PopupMenuItem(
                                      child: Text('Editar'),
                                    ),
                                  ],
                                ),
                                onTap: () {
                                  Navigator.pushNamed(context, '/status');
                                },
                              ),
                              ListTile(
                                title: const Text(
                                    '¿Para qué sirve la firma electronica'),
                                trailing: PopupMenuButton(
                                  icon: const Icon(Icons.more_horiz_rounded,
                                      color: Colors.black),
                                  itemBuilder: (context) => [
                                    const PopupMenuItem(
                                      child: Text('Eliminar'),
                                    ),
                                    const PopupMenuItem(
                                      child: Text('Editar'),
                                    ),
                                  ],
                                ),
                                onTap: () {
                                  Navigator.pushNamed(context, '/status');
                                },
                              ),
                            ],
                          ),
                        ),
                        // Aquí está el último ListTile que se mostrará en la parte inferior del Container
                        Padding(
                          padding: const EdgeInsets.all(8.0),
                          child: ListTile(
                            trailing: Icon(Icons.settings_rounded,
                                color: Colors.black),
                            title: Text("Nombre de usuario"),
                            leading: Image.asset("avatar.png",
                                width: 40, height: 40),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
                Expanded(
                  child: Padding(
                    padding: const EdgeInsets.all(16.0),
                    child: Column(
                      children: [
                        Expanded(
                          child: Card(
                            elevation: 0,
                            borderOnForeground: true,
                            child: Padding(
                              padding: const EdgeInsets.all(16.0),
                              child: Column(
                                mainAxisAlignment:
                                    MainAxisAlignment.spaceBetween,
                                children: [
                                  const SizedBox(height: 200),
                                  Image.asset('assets/logovariant.png',
                                      width: 200, height: 200),
                                  Row(
                                    mainAxisAlignment: MainAxisAlignment.center,
                                    children: const [
                                      Text(
                                        'Preguntas + Preguntadas',
                                        style: TextStyle(
                                            fontWeight: FontWeight.bold,
                                            color: Color(0xff7EC9E0),
                                            fontSize: 36),
                                      ),
                                    ],
                                  ),
                                  const SizedBox(height: 16),
                                  Expanded(
                                    child: LayoutBuilder(
                                      builder: (context, constraints) {
                                        return Wrap(
                                          crossAxisAlignment:
                                              WrapCrossAlignment.end,
                                          direction: constraints.maxWidth > 800
                                              ? Axis.horizontal
                                              : Axis.vertical,
                                          spacing: 8.0,
                                          runSpacing: 8.0,
                                          children: [
                                            _buildQuestionCard(
                                                '¿Cómo empezar a invertir?'),
                                            _buildQuestionCard(
                                                '¿Qué es la E-Firma?'),
                                            _buildQuestionCard(
                                                '¿Cómo funciona el crédito?'),
                                            _buildQuestionCard(
                                                '¿Qué es el Afore?'),
                                          ],
                                        );
                                      },
                                    ),
                                  ),
                                  const SizedBox(height: 16),
                                ],
                              ),
                            ),
                          ),
                        ),
                        const SizedBox(height: 16),
                        Row(
                          children: [
                            const Expanded(
                              child: TextField(
                                decoration: InputDecoration(
                                  enabledBorder: OutlineInputBorder(
                                    borderSide:
                                        BorderSide(color: Color(0xff7EC9E0)),
                                  ),
                                  focusedBorder: OutlineInputBorder(
                                    borderSide:
                                        BorderSide(color: Color(0xff7EC9E0)),
                                  ),
                                  hintText: 'Escribe un mensaje',
                                  prefixIcon: Icon(Icons.edit_rounded,
                                      color: Color(0xff7EC9E0)),
                                  suffixIcon: Icon(Icons.mic_rounded,
                                      color: Color(0xFF616161)),
                                ),
                              ),
                            ),
                            IconButton(
                              onPressed: () {},
                              icon: const Icon(Icons.send_rounded),
                              color: const Color(0xff7EC9E0),
                            )
                          ],
                        ),
                      ],
                    ),
                  ),
                ),
              ],
            );
          } else {
            return Padding(
              padding: const EdgeInsets.all(16.0),
              child: Column(
                children: [
                  Expanded(
                    child: Card(
                      elevation: 0,
                      borderOnForeground: true,
                      child: Padding(
                        padding: const EdgeInsets.all(16.0),
                        child: Column(
                          children: [
                            const SizedBox(height: 50),
                            Image.asset('assets/logovariant.png',
                                width: 100, height: 100),
                            const SizedBox(width: 20),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                const Text(
                                  'Preguntas + Preguntadas',
                                  style: const TextStyle(
                                      fontWeight: FontWeight.bold,
                                      color: Color(0xff7EC9E0),
                                      fontSize: 24),
                                ),
                              ],
                            ),
                            const SizedBox(height: 16),
                            Expanded(
                              child: LayoutBuilder(
                                builder: (context, constraints) {
                                  return Wrap(
                                    crossAxisAlignment: WrapCrossAlignment.end,
                                    direction: constraints.maxWidth > 800
                                        ? Axis.horizontal
                                        : Axis.vertical,
                                    spacing: 16.0,
                                    runSpacing: 8.0,
                                    children: [
                                      _buildQuestionCard(
                                          '¿Cómo empezar a invertir?'),
                                      _buildQuestionCard('¿Qué es la E-Firma?'),
                                      _buildQuestionCard(
                                          '¿Cómo funciona el crédito?'),
                                      _buildQuestionCard('¿Qué es el Afore?'),
                                    ],
                                  );
                                },
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(height: 16),
                  Row(
                    children: [
                      const Expanded(
                        child: TextField(
                          // TODO: cambiar color del cosito de texto
                          decoration: InputDecoration(
                            enabledBorder: OutlineInputBorder(
                              borderSide: BorderSide(color: Color(0xff7EC9E0)),
                            ),
                            focusedBorder: OutlineInputBorder(
                              borderSide: BorderSide(color: Color(0xff7EC9E0)),
                            ),
                            hintText: 'Escribe un mensaje',
                            prefixIcon: Icon(Icons.edit_rounded,
                                color: Color(0xff7EC9E0)),
                            suffixIcon: Icon(Icons.mic_rounded,
                                color: Color(0xFF616161)),
                          ),
                        ),
                      ),
                      IconButton(
                        onPressed: () {},
                        icon: const Icon(Icons.send_rounded),
                        color: const Color(0xff7EC9E0),
                      )
                    ],
                  )
                ],
              ),
            );
          }
        },
      ),
    );
  }

  Widget _buildQuestionCard(String question) {
    return SizedBox(
      width: 200,
      child: Container(
        decoration: BoxDecoration(
          border: Border.all(color: const Color(0xff7EC9E0)),
          borderRadius: BorderRadius.circular(8.0),
        ),
        padding: const EdgeInsets.all(8.0),
        child: Text(question),
      ),
    );
  }
}
