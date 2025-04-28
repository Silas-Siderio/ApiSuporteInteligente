using System.Threading.Tasks;

namespace ApiSuporteInteligente.Services
{
    public interface IOpenAiService
    {
        Task<string> GetChatResponseAsync(string message);
    }
}
