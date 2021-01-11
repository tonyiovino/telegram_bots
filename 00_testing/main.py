def deleteNewline(text):
    if text[-1] == '\n':
        text = text[:-1]
    return text

def readToken(filename):
    f = open(filename, 'r')
    token = deleteNewline(f.readline())
    f.close()
    return token

def test_me():
    token = readToken('token')
    print('***' + token + '***')

    import telegram
    bot = telegram.Bot(token=token)
    print(bot.get_me())

if __name__ == '__main__':
    test_me()