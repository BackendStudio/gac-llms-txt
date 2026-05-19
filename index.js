export default {
  async fetch(request, env, ctx) {
    const githubUrl = "https://raw.githubusercontent.com/BackendStudio/gac-llms-txt/refs/heads/main/llms.txt";
    
    // El robot va al GitHub de BackendStudio y descarga el archivo
    const response = await fetch(githubUrl);
    
    // Le responde al usuario con el contenido en formato de texto plano
    return new Response(response.body, {
      status: response.status,
      headers: {
        "content-type": "text/plain; charset=UTF-8",
        "Access-Control-Allow-Origin": "*", // Permite que las IA lo lean sin bloqueos
      },
    });
  },
};