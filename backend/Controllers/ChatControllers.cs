[Authorize]
[ApiController]
[Route("api/[controller]")]
public class ChatController : ControllerBase
{
    private readonly IOpenAiService _openAiService;

    public ChatController(IOpenAiService openAiService)
    {
        _openAiService = openAiService;
    }

    [HttpPost]
    public async Task<IActionResult> SendMessage(ChatRequestDto chatRequest)
    {
        var response = await _openAiService.GetChatResponseAsync(chatRequest.Message);
        return Ok(new { Response = response });
    }
}
