export default {
  async fetch(request: Request, env: unknown, ctx: ExecutionContext): Promise<Response> {
    const githubUrl = "https://raw.githubusercontent.com/BackendStudio/gac-llms-txt/refs/heads/main/llms.txt";

    // Fetch the file from BackendStudio's GitHub repository
    const response = await fetch(githubUrl);

    // Respond to the user with the content as plain text
    return new Response(response.body, {
      status: response.status,
      headers: {
        "content-type": "text/plain; charset=UTF-8",
        "Access-Control-Allow-Origin": "*", // Allows AI clients to read it without CORS blocks
      },
    });
  },
} satisfies ExportedHandler;
