var data = [
    {
        title: 'Введение',
        description: 'Хорошо подобранное введение в основные команды git',
        boxes:[
            {
                title: 'Знакомство с Git Commit',
                img:'1.png',
                id: 1
            },
            {
                title: 'Ветвление в Git',
                img:'2.png',
                id: 2
            },
            {
                title: 'Слияния веток в Git',
                img:'3.png',
                id: 3
            },
            {
                title: 'Введение в rebase',
                img:'4.png',
                id: 4
            }
        ]
    },
    {
        title: 'Едем дальше',
        description: 'Следующая порция абсолютной git-крутотенюшки. Проголодались?',
        boxes:[
            {
                img:'5.png',
                id: 5
            },
            {
                img:'6.png',
                id: 6
            },
            {
                img:'7.png',
                id: 7
            },
            {
                img:'8.png',
                id: 8
            }
        ]
    },
    {
        title: 'Перемещаем труды туда-сюда',
        description: 'Не стесняйтесь менять историю',
        boxes:[
            {
                img:'9.png',
                id: 9
            },
            {
                img:'10.png',
                id: 10
            }
        ]
    },
    {
        title: 'Сборная солянка',
        description: 'Ассорти из приёмов работы с Git, хитростей и советов',
        boxes:[
            {
                img:'11.png',
                id: 11
            },
            {
                img:'12.png',
                id: 12
            },
            {
                img:'13.png',
                id: 13
            },
            {
                img:'14.png',
                id: 14
            }
            ,
            {
                img:'15.png',
                id: 15
            }
        ]
    },
    {
        title: 'Продвинутый уровень',
        description: 'Если ты смелый, ловкий, умелый – потренируйся тут',
        boxes:[
            {
                img:'16.png',
                id: 16
            },
            {
                img:'17.png',
                id: 17
            },
            {
                img:'18.png',
                id: 18
            }
        ]
    },
]


data2 = [
    {
        title:'Push & Pull - удалённые репозитории в Git!',
        description:'Настало время поделиться своими единичками и нулями. Время коллективного программирования',
        boxes:[
            {
                img:'19.png',
                id: 19
            },
            {
                img:'20.png',
                id: 20
            },
            {
                img:'21.png',
                id: 21
            },
            {
                img:'22.png',
                id: 22
            },
            {
                img:'23.png',
                id: 23
            },
            {
                img:'24.png',
                id: 24
            },
            {
                img:'25.png',
                id: 25
            },
            {
                img:'26.png',
                id: 26
            }
        ]
    },
    {
        title:'Через origin – к звёздам. Продвинутое использование Git Remotes',
        description:'Весело было быть всесильным мудрым правителем...',
        boxes:[
            {
                img:'27.png',
                id: 27
            },
            {
                img:'28.png',
                id: 28
            },
            {
                img:'29.png',
                id: 29
            },
            {
                img:'30.png',
                id: 30
            },
            {
                img:'31.png',
                id: 31
            },
            {
                img:'32.png',
                id: 32
            },
            {
                img:'33.png',
                id: 33
            },
            {
                img:'34.png',
                id: 34
            }
        ]
    }
]


function getById(id, table){

    let array;
    if (table == 'basics') {
        array = data;
    }
    else{
        array = data2;
    }

    for (let i = 0; i < array.length; i++) {
        const element = array[i].boxes;
        for (let j = 0; j < element.length; j++) {
            const el = element[j];
            if (el.id == id) {
                return el
            }
        }
    }
}


