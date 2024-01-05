type TText = {
    mainTitle?: string,
    mainSubtitle?: string
    mainInfo?: string,
    sections: TSection[]
}

type TSection = {
    title: string,
    lines: TLine[],
}

type TLine = string | {
    heading?: string,
    text?: string,
}

const text: TText = {
    mainTitle: 'Литургия',
    mainSubtitle: '',
    mainInfo: '',
    sections: [
        {
            title: 'Возглас',
            lines: [
                { heading: 'Священник', text: 'Благословенно Царство Отца и Сына и Святого Духа, ныне, и всегда и во веки веков' },
                { heading: 'Хор', text: 'Аминь' },
            ],
        },
        {
            title: 'Мирная ектения',
            lines: [
                { heading: 'Священник', text: 'В мире Господу помолимся' },
                { heading: 'Хор', text: 'Господи, помилуй' },
                'О мире свыше и о спасении душ наших Господу помолимся',
                { heading: 'Хор', text: 'Господи, помилуй' },
                'О мире всего мiра, благоденствии святых Божиих Церквей и о соединении всех Господу помолимся',
                { heading: 'Хор', text: 'Господи, помилуй' },
                'О святом храме сем и о всех, с верою, благоговением и страхом Божиим входящих в него, Господу помолимся',
                { heading: 'Хор', text: 'Господи, помилуй' },
                'О Великом Господине и отце нашем Святейшем Патриархе Кирилле и о господине нашем высокопреосвященнейшем митрополите Алексии, почтенном пресвитерстве, во Христе диаконстве, о всём клире и народе Божием Господу помолимся',
                { heading: 'Хор', text: 'Господи, помилуй' },
                'О Богохранимой стране нашей, властях и воинстве её Господу помолимся',
                { heading: 'Хор', text: 'Господи, помилуй' },
                'О граде сем, всяком граде и стране и о верою живущих в них Господу помолимся',
                { heading: 'Хор', text: 'Господи, помилуй' },
                'О благоприятной погоде, об изобилии плодов земли и о временах мирных Господу помолимся',
                { heading: 'Хор', text: 'Господи, помилуй' },
                'О плавающих, путешествующих, болящих, страждущих, пленённых и о спасении их Господу помолимся',
                { heading: 'Хор', text: 'Господи, помилуй' },
                'Об избавлении нас от всякой скорби, гнева, опасности и нужды Господу помолимся',
                { heading: 'Хор', text: 'Господи, помилуй' },
                'Защити, спаси, помилуй и сохрани нас, Боже, Твоею благодатию',
                { heading: 'Хор', text: 'Господи, помилуй' },
                'Пресвятую, пречистую, преблагословенную, славную Владычицу нашу Богородицу и Приснодеву Марию со всеми святыми помянув, сами себя и друг друга, и всю жизнь нашу Христу Богу предадим',
                { heading: 'Хор', text: 'Тебе, Господи' },
                { heading: 'Священник', text: 'Ибо Тебе подобает вся слава, честь и поклонение, Отцу и Сыну и Святому Духу, ныне и всегда, и во веки веков' },
                { heading: 'Хор', text: 'Аминь' },
            ],
        },
        {
            title: 'Первый изобразительный антифон',
            lines: [
                { heading: 'Хор', text: 'Благослови, душе моя, Господа. Благословен еси, Господи. Благослови, душе моя, Господа, и вся внутренняя моя Имя святое Его' },
                'Благослови, душе моя, Господа, и не забывай всех воздаяний Его',
                'Очищающаго вся беззакония твоя, исцеляющаго вся недуги твоя',
                'Избавляющаго от истления живот твой, венчающаго тя милостию и щедротами',
                'Исполняющаго во благих желание твое: обновится, яко орля, юность твоя',
                'Щедр и милостив Господь, долготерпелив и многомилостив',
                'Благослови, душе моя, Господа, и вся внутренняя моя Имя святое Его. Благословен еси, Господи',
            ],
        },
        {
            title: 'Молитва второго антифона',
            lines: [
                { heading: 'Священник', text: 'Господи, Боже наш, спаси народ Твой и благослови наследие Твое, полноту Церкви Твоей сохрани, освяти любящих благолепие дома Твоего! Ты их прославь божественной Твоею силою, и не оставь нас, надеющихся на Тебя' },
                { heading: 'Священник', text: 'Ибо Твоя власть, и Твои — Царство, и сила, и слава, Отца и Сына и Святого Духа, ныне и всегда, и во веки веков' },
                { heading: 'Хор', text: 'Аминь' },
            ],
        },
        {
            title: 'Второй изобразительный антифон',
            lines: [
                { heading: 'Хор', text: 'Хвали, душе моя, Господа. Восхвалю Господа в животе моем, пою Богу моему, дондеже есмь' },
                'Не надейтеся на князи, на сыны человеческия, в нихже несть спасения',
                'Изыдет дух его, и возвратится в землю свою: в той день погибнут вся помышления его',
                'Блажен, емуже Бог Иаковль помощник его, упование его на Господа Бога своего',
                'Сотворшаго небо и землю, море и вся, яже в них',
                'Хранящаго истину в век, творящаго суд обидимым, дающаго пищу алчущим',
                'Господь решит окованныя, Господь умудряет слепцы',
                'Господь возводит низверженныя, Господь любит праведники',
                'Господь хранит пришельцы, сира и вдову приимет, и путь грешных погубит',
                'Воцарится Господь во век, Бог твой, Сионе, в род и род',
            ],
        },
        {
            title: 'Песнь Господу Иисусу Христу',
            lines: [
                { heading: 'Хор', text: 'Единородный Сыне и Слове Божий, Безсмертен Сый и изволивый спасения нашего ради воплотитися от Святыя Богородицы и Приснодевы Марии, непреложно вочеловечивыйся, распныйся же, Христе Боже, смертию смерть поправый, Един Сый Святыя Троицы, спрославляемый Отцу и Святому Духу, спаси нас' },
            ],
        },
        {
            title: 'Молитва третьего антифона',
            lines: [
                { heading: 'Священник', text: 'Ты, даровавший нам эти общие и согласные молитвы, и двум или трем, согласно просящим во имя Твое, просимое подавать обещавший, Сам и ныне прошения рабов Твоих к полезному исполни, подавая нам в нынешнем веке познание Твоей истины, и в будущем жизнь вечную даруя' },
                { heading: 'Священник', text: 'Ибо Ты — благой и человеколюбивый Бог, и Тебе славу воссылаем, Отцу и Сыну и Святому Духу, ныне и всегда, и во веки веков' },
                { heading: 'Хор', text: 'Аминь' },
            ],
        },
        {
            title: 'Блаженны. Малый вход',
            lines: [
                { heading: 'Хор', text: 'Во Царствии Твоем помяни нас, Господи, егда приидеши, во Царствии Твоем' },
                'Блажени нищии духом, яко тех есть Царство Небесное',
                'Блажени плачущии, яко тии утешатся',
                'Блажени кротции, яко тии наследят землю',
                'Блажени алчущии и жаждущии правды, яко тии насытятся',
                'Блажени милостивии, яко тии помиловани будут',
                'Блажени чистии сердцем, яко тии Бога узрят',
                'Блажени миротворцы, яко тии сынове Божии нарекутся',
                'Блажени изгнани правды ради, яко тех есть Царство Небесное',
                'Блажени есте, егда поносят вам, и изженут, и рекут всяк зол глагол на вы, лжуще Мене ради',
                'Блажени есте, егда поносят вам, и изженут, и рекут всяк зол глагол на вы, лжуще Мене ради',
                { heading: 'Священник', text: 'Премудрость! Станем благоговейно!' },
                { heading: 'Хор', text: 'Придите, поклонимся и припадем ко Христу. / Спаси, Сын Божий, / Воскресый из мертвых, поющия Ти: / Аллилуиа' },
            ],
        },
        {
            title: 'Тропари',
            lines: [
                { heading: 'Тропарь воскресный 3 гласа' },
                { heading: 'Хор', text: 'Да веселится все небесное, да радуется все земное, ибо явил могущество руки Своей Господь: попрал смертию смерть, сделался первенцем из мертвых, из чрева ада избавил нас и даровал миру великую милость' },
                { heading: 'Тропарь Петру Крутицкому' },
                { heading: 'Слава', text: 'Божиим смотрением к святительско­му служению /святым Патриархом Тихоном призванный, /стаду Христову явился еси /страж неусыпный и защитник небоязненный, /священномучениче Петре. /Жестокая заточения и дальная изгнания, /страдания и смерть от богоборцев претерпел еси. /Венец мученический прияв, /на Небеси ныне радуешися. /Моли милостиваго Бога, /да сохранит Церковь нашу от нестроений, /единомыслие и мир людем Своим дарует /и спасет души наша' },
                { heading: 'Кондак воскресный 3 гласа' },
                { heading: 'И ныне', text: 'Воскрес Ты в сей день из гроба, Милосердный / и вывел нас из врат смерти. / В сей день Адам ликует и радуется Ева, / а вместе с ними и пророки с патриархами воспевают непрестанно / божественную мощь власти Твоей' },
            ],
        },
        {
            title: 'Возглас',
            lines: [
                { heading: 'Священник', text: 'ибо свят Ты, Боже наш, и Тебе славу воссылаем, Отцу и Сыну и Святому Духу, теперь и всегда и во веки веков' },
                { heading: 'Хор', text: 'Аминь' },
                { heading: 'Священник', text: 'Господи, спаси благочестивых' },
                { heading: 'Хор', text: 'Господи, спаси благочестивых' },
                { heading: 'Священник', text: 'и услыши нас' },
                { heading: 'Хор', text: 'и услыши нас' },
            ],
        },
        {
            title: 'Трисвятое',
            lines: [
                { heading: 'Хор', text: 'Святый, Боже, Святый Крепкий, Святый Безсмертный, помилуй нас' },
                'Святый, Боже, Святый Крепкий, Святый Безсмертный, помилуй нас',
                'Святый, Боже, Святый Крепкий, Святый Безсмертный, помилуй нас',
                'Слава Отцу и Сыну и Святому Духу, и ныне и присно и во веки веков. Аминь. Святый Безсмертный, помилуй нас',
                'Святый, Боже, Святый Крепкий, Святый Безсмертный, помилуй нас',
            ],
        },
        {
            title: 'Прокимен',
            lines: [
                { heading: 'Священник', text: 'внемлем! Мир всем!' },
                { heading: 'Чтец', text: 'и духу твоему' },
                { heading: 'Священник', text: 'Премудрость!' },
                { heading: 'Чтец', text: 'Прокимен, глас 3: Пойте Богу нашему, пойте, / пойте Царю нашему, пойте. Стих: Все народы, рукоплещите, воскликните Богу гласом радости' },
            ],
        },
        {
            title: 'Чтение Апостола',
            lines: [
                { heading: 'Священник', text: 'Премудрость!' },
                { heading: 'Чтец', text: 'к коринфянам послания святого Апостола Павла чтение' },
                { heading: 'Священник', text: 'внемлем!' },
                { heading: 'Чтец', text: 'Братья, теперь относительно сбора денег в помощь святым. Делайте то, что я повелел делать в церквах в Галатии. В первый день недели пусть каждый из вас откладывает и сберегает столько денег, сколько позволяет вам ваш заработок, чтобы, когда я приду, уже не нужно было делать сборы. А когда я приду, то тех людей, кого вы выберете, я пошлю с рекомендательными письмами, чтобы они доставили собранное вами в Иерусалим. А если будет необходимо и мне пойти туда, то они пойдут со мной' },
                { heading: 'Священник', text: 'Мир тебе, чтущей!' },
                { heading: 'Чтец', text: 'и духу твоему' },
                { heading: 'Священник', text: 'Премудрость!' },
                { heading: 'Чтец', text: 'глас 3, аллилуиа, аллилуйя, аллилуйя!' },
                { heading: 'Хор', text: 'аллилуйя, аллилуйя, аллилуйя!' },
                { heading: 'Чтец', text: 'На Тебя, Господи, я уповаю, да не постыжусь вовек' },
                { heading: 'Хор', text: 'аллилуйя, аллилуйя, аллилуйя!' },
                { heading: 'Чтец', text: 'Стань для меня Богом–Защитником и домом прибежища, чтобы спасти меня' },
                { heading: 'Хор', text: 'аллилуйя, аллилуйя, аллилуйя!' },
            ],
        },
        {
            title: 'Комментарий к апостольскому чтению',
            lines: [
                'Рассаживаемся по лавочкам и внимательно слушаем батюшку!',
            ],
        },
        {
            title: 'Чтение Евангелия',
            lines: [
                { heading: 'Священник', text: 'Премудрость. Прости. Услышим святаго Евангелия. Мир всем!' },
                { heading: 'Хор', text: 'и духови твоему' },
                { heading: 'Священник', text: 'От Луки святого Евангелия чтение' },
                { heading: 'Хор', text: 'Слава Тебе, Господи, слава Тебе!' },
                { heading: 'Священник', text: 'внемлем!' },
                'Рече Господь притчу сию: Сеятель вышел сеять семена. И когда он разбрасывал их, то некоторые из семян упали у самой дороги и были затоптаны и склеваны птицами небесными. Другие упали на каменистую почву, и, едва взойдя, ростки засохли от недостатка влаги. Третьи упали в терновник, и когда тот разросся, то заглушил их. Прочие же упали на хорошую почву. Они взошли и принесли урожай во сто раз больше того, что было посеяно. Рассказав эту притчу, Он громко сказал: у кого есть уши, чтобы слышать, пусть слышит!',
                { heading: 'Хор', text: 'Слава Тебе, Господи, слава Тебе!' },
            ],
        },
    ],
};

export default text;

export const sectionsLen = text.sections.length;