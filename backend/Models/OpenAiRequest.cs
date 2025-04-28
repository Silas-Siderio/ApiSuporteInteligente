public class OpenAiRequest
{
    public string Model { get; set; }
    public Message[] Messages { get; set; }
}

public class Message
{
    public string Role { get; set; }
    public string Content { get; set; }
}
