import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class MainServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        out.println("<html>");
        out.println("<head><title>Consciência Ambiental</title></head>");
        out.println("<body style='font-family:Arial;background:#e8f5e9;color:#2e7d32;'>");

        out.println("<h1>🌍 Preservação do Meio Ambiente</h1>");
        out.println("<p>Evite poluição e descarte corretamente o lixo!</p>");

        out.println("<h2>♻️ Dicas:</h2>");
        out.println("<ul>");
        out.println("<li>Separe reciclável e orgânico</li>");
        out.println("<li>Não jogue lixo na rua</li>");
        out.println("<li>Reutilize materiais</li>");
        out.println("</ul>");

        out.println("</body></html>");
    }
}