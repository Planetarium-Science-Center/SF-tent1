// Get the modal and close button elements
const modal = document.getElementById('popup-modal');
const closeBtn = document.querySelector('.close-btn');

// Workshop data for Map 1
const workshops = {
    "workshop4": {
        title: "كلية التربية للطفولة المبكرة",
        description: "ورشة عمل: علم الفلك والتحنيط عند قدماء المصريين عن طريق صنع متحف افتراضي ومسرح وسرد قصة",
        age: "مرحلة رياض أطفال",
        time: "45 دقيقة"
    },
    "workshop5": {
        title: "مؤسسة العقل الذكي",
        description: "عرض تقديمي: تعامد الشمس على رمسيس عن طريق استخدام مجسم ومعبد أبو سمبل والفلك والهندسة والفن الخاصة بهم",
        age: "مرحلة رياض أطفال",
        time: "15 دقيقة"
    },
    "workshop6": {
        title: "شباب بيحب الخير",
        description: "عرض تقديمي: رحلة إلى مقبرة توت عنخ آمون في مصر القديمة والتي تتناول محتويات المقبرة من فخار وكأس أمنيات وقناع توت عنخ آمون والألوان الخاصة بالمقبرة",
        age: "المرحلة الابتدائية - المرحلة الاعدادية - المرحلة الثانوية والجامعية",
        time: "15 دقيقة"
    },
    "workshop7": {
        title: "مدرسة فيكتوريا",
        description: "عرض تقديمي: الفنون واستخدامها للألوان والأشكال والرسومات",
        age: "المرحلة الابتدائية",
        time: "15 دقيقة"
    },
    "workshop8": {
        title: "المراكز الاستكشافية للعلوم والتكنولوجيا، فرع برج العرب",
        description: "ورشة عمل: بردية راند التي تعرض حساب المثلثات والجبر وعلاقة البردية بفيثاغورس، كما تثبت أن الرياضيات كانت موجودة من العصر القديم",
        age: "المرحلة الاعدادية - المرحلة الثانوية والجامعية",
        time: "45 دقيقة"
    },
    "workshop9": {
        title: "مكتبة النشء، مكتبة الإسكندرية",
        description: "ورشة عمل: الأصباغ الطبيعية المستخدمة عند قدماء المصريين وكيف تطورت حاليًّا وتم إضافة ألوان جديدة",
        age: "المرحلة الاعدادية - المرحلة الثانوية والجامعية",
        time: "45 دقيقة"
    },
    "workshop10": {
        title: "مكتبة الطفل، مكتبة الإسكندرية",
        description: "ورشة عمل: الكتابة وصناعة الورق والأحبار والألوان في مصر القديمة بالإضافة إلى التطرق للكاتب المصري ودور الكتابة في نشر الحضارة المصرية القديمة حتى أنشئ علم المصريات",
        age: "مرحلة الابتدائية",
        time: "45 دقيقة"
    },
    "workshop11": {
        title: "مدرسة القدس الدولية",
        description: "عرض تقديمي: استخدام طمي النيل وصناعة الفخار",
        age: "المرحلة الابتدائية",
        time: "15 دقيقة"
    },
    "workshop12": {
        title: "مركز دراسات الخطوط، مكتبة الإسكندرية",
        description: "عرض تقديمي: الكتابة الهيروغليفية القديمة",
        age: "المرحلة الاعدادية - المرحلة الثانوية والجامعية",
        time: "15 دقيقة"
    },
    "workshop13": {
        title: "أكاديمية الترويح العلاجي والتعلم المرح",
        description: "عرض تقديمي: الألوان كإحدى الطرق التي استُخدمت من قبل الحضارات القديمة للتعبير عن المعتقدات والرموز الدينية والاجتماعية والبيئية",
        age: "ذوي الهمم",
        time: "15 دقيقة"
    },
    "workshop14": {
        title: "المكتبات المتخصصة، مكتبة الإسكندرية",
        description: "عرض تقديمي: تشييد الأهرامات وصناعة الأحبار",
        age: "ذوي الهمم",
        time: "15 دقيقة"
    },
    "workshop15": {
        title: "المكتبات المتخصصة، مكتبة الإسكندرية",
        description: "عرض تقديمي: تشييد الأهرامات وصناعة الأحبار",
        age: "ذوي الهمم",
        time: "15 دقيقة"
    }
};

// Function to open the modal with specific workshop data
function openModal(workshop) {
    document.getElementById('workshop-title').textContent = workshops[workshop].title;
    document.getElementById('workshop-description').textContent = workshops[workshop].description;
    document.getElementById('workshop-age').textContent = workshops[workshop].age;
    document.getElementById('workshop-time').textContent = workshops[workshop].time;
    
    modal.style.display = 'flex'; // Change to 'flex' to support Flexbox centering
}


// Add event listeners to all buttons
const buttons = document.querySelectorAll('.popup-btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const workshop = button.getAttribute('data-workshop');
        openModal(workshop);
    });
});

// Close the modal when the close button is clicked
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'; // Hide modal
});

// Close the modal if the user clicks outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none'; // Hide modal
    }
});
