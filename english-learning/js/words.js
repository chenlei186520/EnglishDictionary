// words.js - 英语单词数据库

const wordDatabase = {
    // 译林版教材
    yilin: {
        // 一年级
        1: {
            // 上学期
            1: [
                { word: "cat", phonics: "/kæt/", meaning: "猫", spelling: "c-a-t" },
                { word: "dog", phonics: "/dɒɡ/", meaning: "狗", spelling: "d-o-g" },
                { word: "pig", phonics: "/pɪɡ/", meaning: "猪", spelling: "p-i-g" },
                { word: "duck", phonics: "/dʌk/", meaning: "鸭子", spelling: "d-u-c-k" },
                { word: "bird", phonics: "/bɜːd/", meaning: "鸟", spelling: "b-i-r-d" },
                { word: "apple", phonics: "/ˈæpl/", meaning: "苹果", spelling: "a-p-p-l-e" },
                { word: "banana", phonics: "/bəˈnɑːnə/", meaning: "香蕉", spelling: "b-a-n-a-n-a" },
                { word: "orange", phonics: "/ˈɒrɪndʒ/", meaning: "橙子", spelling: "o-r-a-n-g-e" },
                { word: "pear", phonics: "/peə/", meaning: "梨", spelling: "p-e-a-r" },
                { word: "grape", phonics: "/ɡreɪp/", meaning: "葡萄", spelling: "g-r-a-p-e" },
                { word: "one", phonics: "/wʌn/", meaning: "一", spelling: "o-n-e" },
                { word: "two", phonics: "/tuː/", meaning: "二", spelling: "t-w-o" },
                { word: "three", phonics: "/θriː/", meaning: "三", spelling: "t-h-r-e-e" },
                { word: "four", phonics: "/fɔː/", meaning: "四", spelling: "f-o-u-r" },
                { word: "five", phonics: "/faɪv/", meaning: "五", spelling: "f-i-v-e" },
                { word: "six", phonics: "/sɪks/", meaning: "六", spelling: "s-i-x" },
                { word: "seven", phonics: "/ˈsevn/", meaning: "七", spelling: "s-e-v-e-n" },
                { word: "eight", phonics: "/eɪt/", meaning: "八", spelling: "e-i-g-h-t" },
                { word: "nine", phonics: "/naɪn/", meaning: "九", spelling: "n-i-n-e" },
                { word: "ten", phonics: "/ten/", meaning: "十", spelling: "t-e-n" }
            ],
            // 下学期
            2: [
                { word: "fish", phonics: "/fɪʃ/", meaning: "鱼", spelling: "f-i-s-h" },
                { word: "tiger", phonics: "/ˈtaɪɡə/", meaning: "老虎", spelling: "t-i-g-e-r" },
                { word: "lion", phonics: "/ˈlaɪən/", meaning: "狮子", spelling: "l-i-o-n" },
                { word: "monkey", phonics: "/ˈmʌŋki/", meaning: "猴子", spelling: "m-o-n-k-e-y" },
                { word: "elephant", phonics: "/ˈelɪfənt/", meaning: "大象", spelling: "e-l-e-p-h-a-n-t" },
                { word: "milk", phonics: "/mɪlk/", meaning: "牛奶", spelling: "m-i-l-k" },
                { word: "water", phonics: "/ˈwɔːtə/", meaning: "水", spelling: "w-a-t-e-r" },
                { word: "juice", phonics: "/dʒuːs/", meaning: "果汁", spelling: "j-u-i-c-e" },
                { word: "tea", phonics: "/tiː/", meaning: "茶", spelling: "t-e-a" },
                { word: "cake", phonics: "/keɪk/", meaning: "蛋糕", spelling: "c-a-k-e" },
                { word: "red", phonics: "/red/", meaning: "红色", spelling: "r-e-d" },
                { word: "blue", phonics: "/bluː/", meaning: "蓝色", spelling: "b-l-u-e" },
                { word: "yellow", phonics: "/ˈjeləʊ/", meaning: "黄色", spelling: "y-e-l-l-o-w" },
                { word: "green", phonics: "/ɡriːn/", meaning: "绿色", spelling: "g-r-e-e-n" },
                { word: "orange", phonics: "/ˈɒrɪndʒ/", meaning: "橙色", spelling: "o-r-a-n-g-e" },
                { word: "book", phonics: "/bʊk/", meaning: "书", spelling: "b-o-o-k" },
                { word: "pen", phonics: "/pen/", meaning: "钢笔", spelling: "p-e-n" },
                { word: "pencil", phonics: "/ˈpensl/", meaning: "铅笔", spelling: "p-e-n-c-i-l" },
                { word: "ruler", phonics: "/ˈruːlə/", meaning: "尺子", spelling: "r-u-l-e-r" },
                { word: "bag", phonics: "/bæɡ/", meaning: "书包", spelling: "b-a-g" }
            ]
        },
        // 二年级
        2: {
            // 上学期
            1: [
                { word: "farm", phonics: "/fɑːm/", meaning: "农场", spelling: "f-a-r-m" },
                { word: "cow", phonics: "/kaʊ/", meaning: "奶牛", spelling: "c-o-w" },
                { word: "sheep", phonics: "/ʃiːp/", meaning: "羊", spelling: "s-h-e-e-p" },
                { word: "horse", phonics: "/hɔːs/", meaning: "马", spelling: "h-o-r-s-e" },
                { word: "chicken", phonics: "/ˈtʃɪkɪn/", meaning: "鸡", spelling: "c-h-i-c-k-e-n" },
                { word: "breakfast", phonics: "/ˈbrekfəst/", meaning: "早餐", spelling: "b-r-e-a-k-f-a-s-t" },
                { word: "lunch", phonics: "/lʌntʃ/", meaning: "午餐", spelling: "l-u-n-c-h" },
                { word: "dinner", phonics: "/ˈdɪnə/", meaning: "晚餐", spelling: "d-i-n-n-e-r" },
                { word: "bread", phonics: "/bred/", meaning: "面包", spelling: "b-r-e-a-d" },
                { word: "rice", phonics: "/raɪs/", meaning: "米饭", spelling: "r-i-c-e" },
                { word: "face", phonics: "/feɪs/", meaning: "脸", spelling: "f-a-c-e" },
                { word: "eye", phonics: "/aɪ/", meaning: "眼睛", spelling: "e-y-e" },
                { word: "nose", phonics: "/nəʊz/", meaning: "鼻子", spelling: "n-o-s-e" },
                { word: "mouth", phonics: "/maʊθ/", meaning: "嘴巴", spelling: "m-o-u-t-h" },
                { word: "ear", phonics: "/ɪə/", meaning: "耳朵", spelling: "e-a-r" },
                { word: "hand", phonics: "/hænd/", meaning: "手", spelling: "h-a-n-d" },
                { word: "arm", phonics: "/ɑːm/", meaning: "手臂", spelling: "a-r-m" },
                { word: "leg", phonics: "/leɡ/", meaning: "腿", spelling: "l-e-g" },
                { word: "foot", phonics: "/fʊt/", meaning: "脚", spelling: "f-o-o-t" },
                { word: "body", phonics: "/ˈbɒdi/", meaning: "身体", spelling: "b-o-d-y" }
            ],
            // 下学期
            2: [
                { word: "park", phonics: "/pɑːk/", meaning: "公园", spelling: "p-a-r-k" },
                { word: "tree", phonics: "/triː/", meaning: "树", spelling: "t-r-e-e" },
                { word: "flower", phonics: "/ˈflaʊə/", meaning: "花", spelling: "f-l-o-w-e-r" },
                { word: "grass", phonics: "/ɡrɑːs/", meaning: "草", spelling: "g-r-a-s-s" },
                { word: "lake", phonics: "/leɪk/", meaning: "湖", spelling: "l-a-k-e" },
                { word: "sun", phonics: "/sʌn/", meaning: "太阳", spelling: "s-u-n" },
                { word: "moon", phonics: "/muːn/", meaning: "月亮", spelling: "m-o-o-n" },
                { word: "star", phonics: "/stɑː/", meaning: "星星", spelling: "s-t-a-r" },
                { word: "cloud", phonics: "/klaʊd/", meaning: "云", spelling: "c-l-o-u-d" },
                { word: "rain", phonics: "/reɪn/", meaning: "雨", spelling: "r-a-i-n" },
                { word: "school", phonics: "/skuːl/", meaning: "学校", spelling: "s-c-h-o-o-l" },
                { word: "classroom", phonics: "/ˈklɑːsruːm/", meaning: "教室", spelling: "c-l-a-s-s-r-o-o-m" },
                { word: "teacher", phonics: "/ˈtiːtʃə/", meaning: "老师", spelling: "t-e-a-c-h-e-r" },
                { word: "student", phonics: "/ˈstjuːdənt/", meaning: "学生", spelling: "s-t-u-d-e-n-t" },
                { word: "friend", phonics: "/frend/", meaning: "朋友", spelling: "f-r-i-e-n-d" },
                { word: "desk", phonics: "/desk/", meaning: "书桌", spelling: "d-e-s-k" },
                { word: "chair", phonics: "/tʃeə/", meaning: "椅子", spelling: "c-h-a-i-r" },
                { word: "blackboard", phonics: "/ˈblækbɔːd/", meaning: "黑板", spelling: "b-l-a-c-k-b-o-a-r-d" },
                { word: "window", phonics: "/ˈwɪndəʊ/", meaning: "窗户", spelling: "w-i-n-d-o-w" },
                { word: "door", phonics: "/dɔː/", meaning: "门", spelling: "d-o-o-r" }
            ]
        },
        // 三年级
        3: {
            // 上学期 - 根据译林版课本实际内容
            1: [
                // Unit 1: Hello!
                { word: "hello", phonics: "/həˈləʊ/", meaning: "你好", spelling: "h-e-l-l-o" },
                { word: "hi", phonics: "/haɪ/", meaning: "嗨", spelling: "h-i" },
                { word: "Miss", phonics: "/mɪs/", meaning: "小姐", spelling: "M-i-s-s" },
                { word: "class", phonics: "/klɑːs/", meaning: "班级", spelling: "c-l-a-s-s" },
                { word: "I", phonics: "/aɪ/", meaning: "我", spelling: "I" },
                { word: "am", phonics: "/æm/", meaning: "是", spelling: "a-m" },
                { word: "morning", phonics: "/ˈmɔːnɪŋ/", meaning: "早晨", spelling: "m-o-r-n-i-n-g" },
                { word: "afternoon", phonics: "/ˌɑːftəˈnuːn/", meaning: "下午", spelling: "a-f-t-e-r-n-o-o-n" },
                
                // Unit 2: I'm Liu Tao
                { word: "are", phonics: "/ɑː/", meaning: "是", spelling: "a-r-e" },
                { word: "you", phonics: "/juː/", meaning: "你", spelling: "y-o-u" },
                { word: "yes", phonics: "/jes/", meaning: "是的", spelling: "y-e-s" },
                { word: "no", phonics: "/nəʊ/", meaning: "不", spelling: "n-o" },
                { word: "not", phonics: "/nɒt/", meaning: "不", spelling: "n-o-t" },
                { word: "goodbye", phonics: "/ˌɡʊdˈbaɪ/", meaning: "再见", spelling: "g-o-o-d-b-y-e" },
                { word: "bye", phonics: "/baɪ/", meaning: "再见", spelling: "b-y-e" },
                
                // Unit 3: My friends
                { word: "friend", phonics: "/frend/", meaning: "朋友", spelling: "f-r-i-e-n-d" },
                { word: "she", phonics: "/ʃiː/", meaning: "她", spelling: "s-h-e" },
                { word: "he", phonics: "/hiː/", meaning: "他", spelling: "h-e" },
                { word: "too", phonics: "/tuː/", meaning: "也", spelling: "t-o-o" },
                
                // Unit 4: My family
                { word: "father", phonics: "/ˈfɑːðə/", meaning: "父亲", spelling: "f-a-t-h-e-r" },
                { word: "mother", phonics: "/ˈmʌðə/", meaning: "母亲", spelling: "m-o-t-h-e-r" },
                { word: "brother", phonics: "/ˈbrʌðə/", meaning: "兄弟", spelling: "b-r-o-t-h-e-r" },
                { word: "sister", phonics: "/ˈsɪstə/", meaning: "姐妹", spelling: "s-i-s-t-e-r" },
                { word: "family", phonics: "/ˈfæməli/", meaning: "家庭", spelling: "f-a-m-i-l-y" },
                
                // Unit 5: Look at me!
                { word: "look", phonics: "/lʊk/", meaning: "看", spelling: "l-o-o-k" },
                { word: "at", phonics: "/æt/", meaning: "在", spelling: "a-t" },
                { word: "T-shirt", phonics: "/ˈtiː ʃɜːt/", meaning: "T恤衫", spelling: "T-s-h-i-r-t" },
                { word: "nice", phonics: "/naɪs/", meaning: "好看的", spelling: "n-i-c-e" },
                { word: "red", phonics: "/red/", meaning: "红色", spelling: "r-e-d" },
                { word: "yellow", phonics: "/ˈjeləʊ/", meaning: "黄色", spelling: "y-e-l-l-o-w" },
                { word: "green", phonics: "/ɡriːn/", meaning: "绿色", spelling: "g-r-e-e-n" },
                { word: "blue", phonics: "/bluː/", meaning: "蓝色", spelling: "b-l-u-e" },
                
                // Unit 6: Colours
                { word: "colour", phonics: "/ˈkʌlə/", meaning: "颜色", spelling: "c-o-l-o-u-r" },
                { word: "orange", phonics: "/ˈɒrɪndʒ/", meaning: "橙色", spelling: "o-r-a-n-g-e" },
                { word: "black", phonics: "/blæk/", meaning: "黑色", spelling: "b-l-a-c-k" },
                { word: "white", phonics: "/waɪt/", meaning: "白色", spelling: "w-h-i-t-e" },
                { word: "brown", phonics: "/braʊn/", meaning: "棕色", spelling: "b-r-o-w-n" },
                
                // Unit 7: Would you like a pie?
                { word: "pie", phonics: "/paɪ/", meaning: "馅饼", spelling: "p-i-e" },
                { word: "cake", phonics: "/keɪk/", meaning: "蛋糕", spelling: "c-a-k-e" },
                { word: "hot dog", phonics: "/ˈhɒt dɒɡ/", meaning: "热狗", spelling: "h-o-t d-o-g" },
                { word: "ice cream", phonics: "/ˈaɪs kriːm/", meaning: "冰淇淋", spelling: "i-c-e c-r-e-a-m" },
                { word: "sweet", phonics: "/swiːt/", meaning: "糖果", spelling: "s-w-e-e-t" },
                { word: "pie", phonics: "/paɪ/", meaning: "馅饼", spelling: "p-i-e" },
                { word: "would", phonics: "/wʊd/", meaning: "想要", spelling: "w-o-u-l-d" },
                { word: "like", phonics: "/laɪk/", meaning: "喜欢", spelling: "l-i-k-e" },
                
                // Unit 8: Happy New Year!
                { word: "uncle", phonics: "/ˈʌŋkl/", meaning: "叔叔", spelling: "u-n-c-l-e" },
                { word: "aunt", phonics: "/ɑːnt/", meaning: "阿姨", spelling: "a-u-n-t" },
                { word: "for", phonics: "/fɔː/", meaning: "给", spelling: "f-o-r" },
                { word: "CD", phonics: "/ˌsiːˈdiː/", meaning: "光盘", spelling: "C-D" },
                { word: "car", phonics: "/kɑː/", meaning: "汽车", spelling: "c-a-r" },
                { word: "robot", phonics: "/ˈrəʊbɒt/", meaning: "机器人", spelling: "r-o-b-o-t" },
                { word: "toy", phonics: "/tɔɪ/", meaning: "玩具", spelling: "t-o-y" }
            ],
            // 下学期 - 根据译林版课本实际内容
            2: [
                // Unit 1: In class
                { word: "in", phonics: "/ɪn/", meaning: "在...里", spelling: "i-n" },
                { word: "class", phonics: "/klɑːs/", meaning: "班级", spelling: "c-l-a-s-s" },
                { word: "stand", phonics: "/stænd/", meaning: "站立", spelling: "s-t-a-n-d" },
                { word: "up", phonics: "/ʌp/", meaning: "向上", spelling: "u-p" },
                { word: "sit", phonics: "/sɪt/", meaning: "坐下", spelling: "s-i-t" },
                { word: "down", phonics: "/daʊn/", meaning: "向下", spelling: "d-o-w-n" },
                { word: "please", phonics: "/pliːz/", meaning: "请", spelling: "p-l-e-a-s-e" },
                { word: "open", phonics: "/ˈəʊpən/", meaning: "打开", spelling: "o-p-e-n" },
                { word: "the", phonics: "/ðə/", meaning: "这个", spelling: "t-h-e" },
                { word: "door", phonics: "/dɔː/", meaning: "门", spelling: "d-o-o-r" },
                
                // Unit 2: In the library
                { word: "close", phonics: "/kləʊz/", meaning: "关闭", spelling: "c-l-o-s-e" },
                { word: "window", phonics: "/ˈwɪndəʊ/", meaning: "窗户", spelling: "w-i-n-d-o-w" },
                { word: "blackboard", phonics: "/ˈblækbɔːd/", meaning: "黑板", spelling: "b-l-a-c-k-b-o-a-r-d" },
                { word: "book", phonics: "/bʊk/", meaning: "书", spelling: "b-o-o-k" },
                { word: "rubber", phonics: "/ˈrʌbə/", meaning: "橡皮", spelling: "r-u-b-b-e-r" },
                { word: "don't", phonics: "/dəʊnt/", meaning: "不要", spelling: "d-o-n-'t" },
                { word: "listen", phonics: "/ˈlɪsn/", meaning: "听", spelling: "l-i-s-t-e-n" },
                { word: "to", phonics: "/tuː/", meaning: "到", spelling: "t-o" },
                
                // Unit 3: Is this your pencil?
                { word: "pencil", phonics: "/ˈpensl/", meaning: "铅笔", spelling: "p-e-n-c-i-l" },
                { word: "isn't", phonics: "/ˈɪznt/", meaning: "不是", spelling: "i-s-n-'t" },
                { word: "that", phonics: "/ðæt/", meaning: "那个", spelling: "t-h-a-t" },
                { word: "schoolbag", phonics: "/ˈskuːlbæɡ/", meaning: "书包", spelling: "s-c-h-o-o-l-b-a-g" },
                { word: "pen", phonics: "/pen/", meaning: "钢笔", spelling: "p-e-n" },
                { word: "ruler", phonics: "/ˈruːlə/", meaning: "尺子", spelling: "r-u-l-e-r" },
                { word: "pencil case", phonics: "/ˈpensl keɪs/", meaning: "铅笔盒", spelling: "p-e-n-c-i-l c-a-s-e" },
                
                // Unit 4: Where's the bird?
                { word: "bird", phonics: "/bɜːd/", meaning: "鸟", spelling: "b-i-r-d" },
                { word: "where", phonics: "/weə/", meaning: "哪里", spelling: "w-h-e-r-e" },
                { word: "it's", phonics: "/ɪts/", meaning: "它是", spelling: "i-t-'s" },
                { word: "in", phonics: "/ɪn/", meaning: "在...里", spelling: "i-n" },
                { word: "on", phonics: "/ɒn/", meaning: "在...上", spelling: "o-n" },
                { word: "under", phonics: "/ˈʌndə/", meaning: "在...下", spelling: "u-n-d-e-r" },
                { word: "chair", phonics: "/tʃeə/", meaning: "椅子", spelling: "c-h-a-i-r" },
                { word: "desk", phonics: "/desk/", meaning: "书桌", spelling: "d-e-s-k" },
                
                // Unit 5: How old are you?
                { word: "how", phonics: "/haʊ/", meaning: "多少", spelling: "h-o-w" },
                { word: "old", phonics: "/əʊld/", meaning: "岁", spelling: "o-l-d" },
                { word: "are", phonics: "/ɑː/", meaning: "是", spelling: "a-r-e" },
                { word: "you", phonics: "/juː/", meaning: "你", spelling: "y-o-u" },
                { word: "one", phonics: "/wʌn/", meaning: "一", spelling: "o-n-e" },
                { word: "two", phonics: "/tuː/", meaning: "二", spelling: "t-w-o" },
                { word: "three", phonics: "/θriː/", meaning: "三", spelling: "t-h-r-e-e" },
                { word: "four", phonics: "/fɔː/", meaning: "四", spelling: "f-o-u-r" },
                { word: "five", phonics: "/faɪv/", meaning: "五", spelling: "f-i-v-e" },
                { word: "six", phonics: "/sɪks/", meaning: "六", spelling: "s-i-x" },
                { word: "seven", phonics: "/ˈsevn/", meaning: "七", spelling: "s-e-v-e-n" },
                { word: "eight", phonics: "/eɪt/", meaning: "八", spelling: "e-i-g-h-t" },
                { word: "nine", phonics: "/naɪn/", meaning: "九", spelling: "n-i-n-e" },
                { word: "ten", phonics: "/ten/", meaning: "十", spelling: "t-e-n" },
                
                // Unit 6: What time is it?
                { word: "what", phonics: "/wɒt/", meaning: "什么", spelling: "w-h-a-t" },
                { word: "time", phonics: "/taɪm/", meaning: "时间", spelling: "t-i-m-e" },
                { word: "is", phonics: "/ɪz/", meaning: "是", spelling: "i-s" },
                { word: "it", phonics: "/ɪt/", meaning: "它", spelling: "i-t" },
                { word: "eleven", phonics: "/ɪˈlevn/", meaning: "十一", spelling: "e-l-e-v-e-n" },
                { word: "twelve", phonics: "/twelv/", meaning: "十二", spelling: "t-w-e-l-v-e" },
                { word: "lunch", phonics: "/lʌntʃ/", meaning: "午餐", spelling: "l-u-n-c-h" },
                { word: "dinner", phonics: "/ˈdɪnə/", meaning: "晚餐", spelling: "d-i-n-n-e-r" },
                { word: "bed", phonics: "/bed/", meaning: "床", spelling: "b-e-d" },
                
                // Unit 7: On the farm
                { word: "farm", phonics: "/fɑːm/", meaning: "农场", spelling: "f-a-r-m" },
                { word: "welcome", phonics: "/ˈwelkəm/", meaning: "欢迎", spelling: "w-e-l-c-o-m-e" },
                { word: "to", phonics: "/tuː/", meaning: "到", spelling: "t-o" },
                { word: "my", phonics: "/maɪ/", meaning: "我的", spelling: "m-y" },
                { word: "father", phonics: "/ˈfɑːðə/", meaning: "父亲", spelling: "f-a-t-h-e-r" },
                { word: "mother", phonics: "/ˈmʌðə/", meaning: "母亲", spelling: "m-o-t-h-e-r" },
                { word: "sister", phonics: "/ˈsɪstə/", meaning: "姐妹", spelling: "s-i-s-t-e-r" },
                { word: "brother", phonics: "/ˈbrʌðə/", meaning: "兄弟", spelling: "b-r-o-t-h-e-r" },
                { word: "sheep", phonics: "/ʃiːp/", meaning: "羊", spelling: "s-h-e-e-p" },
                { word: "pig", phonics: "/pɪɡ/", meaning: "猪", spelling: "p-i-g" },
                { word: "cow", phonics: "/kaʊ/", meaning: "奶牛", spelling: "c-o-w" },
                { word: "chicken", phonics: "/ˈtʃɪkɪn/", meaning: "鸡", spelling: "c-h-i-c-k-e-n" },
                { word: "duck", phonics: "/dʌk/", meaning: "鸭子", spelling: "d-u-c-k" },
                { word: "dog", phonics: "/dɒɡ/", meaning: "狗", spelling: "d-o-g" },
                
                // Unit 8: We're twins!
                { word: "we", phonics: "/wiː/", meaning: "我们", spelling: "w-e" },
                { word: "are", phonics: "/ɑː/", meaning: "是", spelling: "a-r-e" },
                { word: "twins", phonics: "/twɪnz/", meaning: "双胞胎", spelling: "t-w-i-n-s" },
                { word: "girl", phonics: "/ɡɜːl/", meaning: "女孩", spelling: "g-i-r-l" },
                { word: "boy", phonics: "/bɔɪ/", meaning: "男孩", spelling: "b-o-y" },
                { word: "baby", phonics: "/ˈbeɪbi/", meaning: "婴儿", spelling: "b-a-b-y" },
                { word: "name", phonics: "/neɪm/", meaning: "名字", spelling: "n-a-m-e" },
                { word: "is", phonics: "/ɪz/", meaning: "是", spelling: "i-s" },
                { word: "Mike", phonics: "/maɪk/", meaning: "迈克", spelling: "M-i-k-e" },
                { word: "Su Hai", phonics: "/suː haɪ/", meaning: "苏海", spelling: "S-u H-a-i" },
                { word: "Yang Ling", phonics: "/jæŋ lɪŋ/", meaning: "杨玲", spelling: "Y-a-n-g L-i-n-g" },
                { word: "Tina", phonics: "/ˈtiːnə/", meaning: "蒂娜", spelling: "T-i-n-a" },
                { word: "Bobby", phonics: "/ˈbɒbi/", meaning: "鲍比", spelling: "B-o-b-b-y" },
                { word: "Sam", phonics: "/sæm/", meaning: "山姆", spelling: "S-a-m" }
            ]
        }
    },
    // 人教版教材（简化版，仅包含部分年级）
    pep: {
        1: {
            1: [
                { word: "hello", phonics: "/həˈləʊ/", meaning: "你好", spelling: "h-e-l-l-o" },
                { word: "hi", phonics: "/haɪ/", meaning: "嗨", spelling: "h-i" },
                { word: "goodbye", phonics: "/ˌɡʊdˈbaɪ/", meaning: "再见", spelling: "g-o-o-d-b-y-e" },
                { word: "bye", phonics: "/baɪ/", meaning: "再见", spelling: "b-y-e" },
                { word: "name", phonics: "/neɪm/", meaning: "名字", spelling: "n-a-m-e" }
            ]
        }
    },
    // 牛津版教材（简化版，仅包含部分年级）
    oxford: {
        1: {
            1: [
                { word: "hello", phonics: "/həˈləʊ/", meaning: "你好", spelling: "h-e-l-l-o" },
                { word: "cat", phonics: "/kæt/", meaning: "猫", spelling: "c-a-t" },
                { word: "dog", phonics: "/dɒɡ/", meaning: "狗", spelling: "d-o-g" }
            ]
        }
    }
};

// 获取单词列表
function getWordList(textbook, grade, semester) {
    if (wordDatabase[textbook] && 
        wordDatabase[textbook][grade] && 
        wordDatabase[textbook][grade][semester]) {
        return wordDatabase[textbook][grade][semester];
    }
    // 如果找不到，返回空数组
    return [];
}

// 导出（用于模块化使用）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { wordDatabase, getWordList };
}