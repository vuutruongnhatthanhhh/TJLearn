export type CourseLevel = "Cơ bản" | "Trung bình" | "Nâng cao";
export type CourseAccess = "free" | "paid";

export interface Lesson {
  title: string;
  duration: string;
  preview: boolean;
}

export interface CourseSection {
  title: string;
  lessons: Lesson[];
}

export interface Course {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  category: string;
  level: CourseLevel;
  access: CourseAccess;
  price: number;
  originalPrice?: number;
  thumbnail: string;
  rating: number;
  ratingCount: number;
  studentsCount: number;
  lessonsCount: number;
  duration: string;
  updatedAt: string;
  hasTrial: boolean;
  trialNote: string;
  tags: string[];
  outcomes: string[];
  curriculum: CourseSection[];
  classId: string;
}

export interface TeachingClass {
  id: string;
  name: string;
  courseSlug: string;
  schedule: string;
  studentsCount: number;
  capacity: number;
  status: "Đang diễn ra" | "Sắp khai giảng" | "Đã kết thúc";
  startDate: string;
}

export interface Student {
  id: string;
  name: string;
  avatar: string;
  email: string;
  classId: string;
  progress: number;
  status: "Đang học" | "Tạm nghỉ" | "Hoàn thành";
  joinedAt: string;
  lastActive: string;
}

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  cover: string;
  tag: string;
  status: "Đã đăng" | "Bản nháp";
  publishedAt: string;
  views: number;
  comments: number;
  readTime: string;
}

export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  courseSlug: string;
  status: "Công khai" | "Riêng tư" | "Đang xử lý";
  uploadedAt: string;
  views: number;
}

export interface Testimonial {
  name: string;
  avatar: string;
  role: string;
  rating: number;
  quote: string;
  courseSlug: string;
}

export const teacher = {
  name: "Đặng Minh Khôi",
  title: "Mentor Công nghệ & Kỹ năng số",
  avatar: "/images/avatars/giang-vien.jpg",
  cover: "/images/teacher/teacher-cover.jpg",
  tagline: "Biến kỹ năng số thành lợi thế sự nghiệp của bạn",
  bio: "Mình là Khôi — đã có 6 năm làm sản phẩm số và 5 năm đứng lớp. Mình tin ai cũng có thể học công nghệ nếu được dẫn đường đúng cách: thực hành nhiều, phản hồi nhanh, và luôn gắn với một mục tiêu nghề nghiệp cụ thể. TJLearn là nơi mình gom hết kinh nghiệm đó lại cho các bạn.",
  experienceYears: 6,
  studentsCount: 18400,
  coursesCount: 12,
  rating: 4.9,
  location: "TP. Hồ Chí Minh",
  socials: {
    youtube: "#",
    facebook: "#",
    linkedin: "#",
  },
  highlights: [
    "6 năm kinh nghiệm sản phẩm số tại các startup công nghệ",
    "Hơn 18,000 học viên đã theo học trực tiếp",
    "Giảng viên khách mời tại 4 trung tâm đào tạo lớn",
    "Founder cộng đồng 'Người Trẻ Làm Số' — 40,000+ thành viên",
  ],
};

export const classes: TeachingClass[] = [
  {
    id: "webdev-k15",
    name: "Web Fullstack K15",
    courseSlug: "lap-trinh-web-fullstack",
    schedule: "Thứ 2 - 4 - 6, 19h30 - 21h30",
    studentsCount: 34,
    capacity: 40,
    status: "Đang diễn ra",
    startDate: "2026-09-14",
  },
  {
    id: "frontend-k8",
    name: "Frontend Nâng Cao K8",
    courseSlug: "frontend-nang-cao-react-nextjs",
    schedule: "Thứ 3 - 5, 20h00 - 22h00",
    studentsCount: 27,
    capacity: 30,
    status: "Đang diễn ra",
    startDate: "2026-10-01",
  },
  {
    id: "uiux-k8",
    name: "UI/UX Sprint K8",
    courseSlug: "uiux-design-thinking",
    schedule: "Thứ 7 - CN, 9h00 - 11h30",
    studentsCount: 22,
    capacity: 25,
    status: "Sắp khai giảng",
    startDate: "2026-11-21",
  },
  {
    id: "data-k5",
    name: "Data Analyst K5",
    courseSlug: "data-analyst-python-sql",
    schedule: "Thứ 2 - 4, 19h00 - 21h00",
    studentsCount: 29,
    capacity: 35,
    status: "Đang diễn ra",
    startDate: "2026-08-10",
  },
  {
    id: "ai-k3",
    name: "AI Builder K3",
    courseSlug: "ai-machine-learning-nhap-mon",
    schedule: "Thứ 7, 14h00 - 17h00",
    studentsCount: 19,
    capacity: 25,
    status: "Đang diễn ra",
    startDate: "2026-09-27",
  },
  {
    id: "marketing-k10",
    name: "Marketing Số K10",
    courseSlug: "marketing-so-tu-a-den-z",
    schedule: "Linh hoạt — Online tự học",
    studentsCount: 41,
    capacity: 50,
    status: "Đã kết thúc",
    startDate: "2026-05-05",
  },
  {
    id: "office-k20",
    name: "Office Skills K20",
    courseSlug: "excel-google-sheet-cong-so",
    schedule: "Linh hoạt — Online tự học",
    studentsCount: 46,
    capacity: 60,
    status: "Đang diễn ra",
    startDate: "2026-07-01",
  },
];

export const courses: Course[] = [
  {
    slug: "lap-trinh-web-fullstack",
    title: "Lập trình Web Fullstack từ Zero đến Hero",
    shortDescription: "HTML, CSS, JavaScript, Node.js và React — lộ trình đầy đủ để trở thành dev fullstack.",
    description:
      "Khoá học đưa bạn từ con số 0 đến khả năng tự xây dựng một sản phẩm web hoàn chỉnh: từ giao diện, logic phía server, đến cơ sở dữ liệu. Toàn bộ kiến thức được đóng gói thành các dự án thực tế, có review code trực tiếp mỗi tuần.",
    category: "Lập trình",
    level: "Cơ bản",
    access: "paid",
    price: 1890000,
    originalPrice: 2990000,
    thumbnail: "/images/courses/web-dev.jpg",
    rating: 4.9,
    ratingCount: 612,
    studentsCount: 5240,
    lessonsCount: 86,
    duration: "48 giờ",
    updatedAt: "2026-10-12",
    hasTrial: true,
    trialNote: "Xem thử 3 bài học đầu miễn phí",
    tags: ["HTML/CSS", "JavaScript", "Node.js", "React"],
    outcomes: [
      "Xây dựng được website hoàn chỉnh từ frontend đến backend",
      "Thành thạo Git, triển khai sản phẩm lên hosting thật",
      "Tự tin phỏng vấn vị trí Junior Fullstack Developer",
      "Có 3 dự án thực chiến trong portfolio cá nhân",
    ],
    curriculum: [
      {
        title: "Nhập môn Web & Công cụ",
        lessons: [
          { title: "Tổng quan nghề Web Developer", duration: "12:04", preview: true },
          { title: "Cài đặt môi trường & VS Code", duration: "15:20", preview: true },
          { title: "Git & GitHub cho người mới", duration: "18:45", preview: true },
        ],
      },
      {
        title: "HTML & CSS nền tảng",
        lessons: [
          { title: "Cấu trúc HTML5 chuẩn SEO", duration: "22:10", preview: false },
          { title: "Flexbox & Grid Layout", duration: "28:33", preview: false },
          { title: "Responsive Design thực chiến", duration: "25:00", preview: false },
        ],
      },
      {
        title: "JavaScript & React",
        lessons: [
          { title: "JavaScript ES6+ căn bản", duration: "35:12", preview: false },
          { title: "React Components & Hooks", duration: "40:08", preview: false },
          { title: "Kết nối API thực tế", duration: "30:45", preview: false },
        ],
      },
    ],
    classId: "webdev-k15",
  },
  {
    slug: "frontend-nang-cao-react-nextjs",
    title: "Frontend Nâng Cao với React & Next.js",
    shortDescription: "Đào sâu React, Next.js App Router, tối ưu hiệu năng và SEO cho ứng dụng thực tế.",
    description:
      "Dành cho người đã biết JavaScript cơ bản, khoá học giúp bạn làm chủ React hiện đại và Next.js — bao gồm Server Components, tối ưu tải trang, và các pattern dùng trong sản phẩm thật tại doanh nghiệp.",
    category: "Lập trình",
    level: "Nâng cao",
    access: "paid",
    price: 2290000,
    originalPrice: 2990000,
    thumbnail: "/images/courses/web-dev-2.jpg",
    rating: 4.8,
    ratingCount: 348,
    studentsCount: 2130,
    lessonsCount: 62,
    duration: "36 giờ",
    updatedAt: "2026-10-20",
    hasTrial: true,
    trialNote: "Xem thử bài học khai giảng",
    tags: ["React", "Next.js", "TypeScript", "Performance"],
    outcomes: [
      "Thành thạo App Router, Server & Client Components",
      "Tối ưu Core Web Vitals cho sản phẩm thực tế",
      "Triển khai ứng dụng production với CI/CD cơ bản",
      "Đọc hiểu và đóng góp vào codebase lớn",
    ],
    curriculum: [
      {
        title: "Next.js App Router",
        lessons: [
          { title: "Tư duy routing hiện đại", duration: "20:00", preview: true },
          { title: "Server Components vs Client Components", duration: "26:40", preview: false },
        ],
      },
      {
        title: "Tối ưu hiệu năng",
        lessons: [
          { title: "Image & Font Optimization", duration: "18:30", preview: false },
          { title: "Caching & Revalidation", duration: "24:15", preview: false },
        ],
      },
    ],
    classId: "frontend-k8",
  },
  {
    slug: "uiux-design-thinking",
    title: "UI/UX Design Thinking cho người mới",
    shortDescription: "Tư duy thiết kế sản phẩm, wireframe, prototype và hệ thống thiết kế trong 8 tuần.",
    description:
      "Không cần biết vẽ đẹp — khoá học tập trung vào tư duy giải quyết vấn đề của người dùng, dựng wireframe, prototype trên Figma, và xây dựng hệ thống thiết kế nhất quán cho sản phẩm số.",
    category: "Thiết kế",
    level: "Cơ bản",
    access: "paid",
    price: 1490000,
    originalPrice: 1990000,
    thumbnail: "/images/courses/ui-ux.jpg",
    rating: 4.9,
    ratingCount: 274,
    studentsCount: 1890,
    lessonsCount: 48,
    duration: "28 giờ",
    updatedAt: "2026-09-30",
    hasTrial: true,
    trialNote: "Xem thử 2 bài học đầu miễn phí",
    tags: ["Figma", "Wireframe", "Design System", "Prototype"],
    outcomes: [
      "Thực hiện quy trình design thinking từ A-Z",
      "Thành thạo Figma và prototype tương tác",
      "Xây dựng design system cho sản phẩm riêng",
      "Có portfolio UI/UX sẵn sàng ứng tuyển",
    ],
    curriculum: [
      {
        title: "Tư duy thiết kế sản phẩm",
        lessons: [
          { title: "Design Thinking là gì?", duration: "14:20", preview: true },
          { title: "Nghiên cứu người dùng cơ bản", duration: "19:50", preview: true },
        ],
      },
      {
        title: "Thực hành trên Figma",
        lessons: [
          { title: "Làm chủ công cụ Figma", duration: "32:10", preview: false },
          { title: "Dựng Design System", duration: "27:45", preview: false },
        ],
      },
    ],
    classId: "uiux-k8",
  },
  {
    slug: "data-analyst-python-sql",
    title: "Data Analyst với Python & SQL",
    shortDescription: "Xử lý dữ liệu, truy vấn SQL, và trực quan hoá dữ liệu cho quyết định kinh doanh.",
    description:
      "Khoá học trang bị kỹ năng phân tích dữ liệu thực chiến: thu thập, làm sạch, truy vấn và trình bày dữ liệu bằng Python (Pandas) và SQL — kèm các case study từ ngành bán lẻ, tài chính, marketing.",
    category: "Dữ liệu",
    level: "Trung bình",
    access: "paid",
    price: 2090000,
    originalPrice: 2690000,
    thumbnail: "/images/courses/data-science.jpg",
    rating: 4.8,
    ratingCount: 196,
    studentsCount: 1420,
    lessonsCount: 54,
    duration: "34 giờ",
    updatedAt: "2026-10-05",
    hasTrial: false,
    trialNote: "Chỉ dành cho học viên đã đăng ký",
    tags: ["Python", "SQL", "Pandas", "Dashboard"],
    outcomes: [
      "Viết truy vấn SQL từ cơ bản đến nâng cao",
      "Xử lý dữ liệu với Python Pandas",
      "Xây dashboard trực quan hoá dữ liệu",
      "Đọc hiểu bài toán kinh doanh qua dữ liệu",
    ],
    curriculum: [
      {
        title: "Nền tảng SQL",
        lessons: [
          { title: "Truy vấn SELECT cơ bản", duration: "16:00", preview: false },
          { title: "JOIN và các mối quan hệ dữ liệu", duration: "24:30", preview: false },
        ],
      },
    ],
    classId: "data-k5",
  },
  {
    slug: "marketing-so-tu-a-den-z",
    title: "Marketing Số từ A-Z",
    shortDescription: "SEO, chạy ads, content và xây kênh social — toàn cảnh marketing số cho người mới.",
    description:
      "Miễn phí toàn bộ khoá học. Bạn sẽ có một bức tranh toàn cảnh về marketing số hiện đại: từ content, SEO, quảng cáo trả phí đến xây dựng thương hiệu cá nhân trên social media.",
    category: "Marketing",
    level: "Cơ bản",
    access: "free",
    price: 0,
    thumbnail: "/images/courses/marketing.jpg",
    rating: 4.7,
    ratingCount: 520,
    studentsCount: 8120,
    lessonsCount: 32,
    duration: "18 giờ",
    updatedAt: "2026-08-22",
    hasTrial: true,
    trialNote: "Miễn phí toàn bộ khoá học",
    tags: ["SEO", "Social Media", "Ads", "Content"],
    outcomes: [
      "Lập kế hoạch marketing số cơ bản",
      "Chạy quảng cáo Facebook/Google ở mức nền tảng",
      "Xây dựng nội dung thu hút trên social",
      "Đo lường hiệu quả chiến dịch",
    ],
    curriculum: [
      {
        title: "Toàn cảnh Marketing số",
        lessons: [
          { title: "Marketing số thay đổi thế nào?", duration: "10:15", preview: true },
          { title: "Xây chiến lược nội dung", duration: "17:40", preview: true },
        ],
      },
    ],
    classId: "marketing-k10",
  },
  {
    slug: "tieng-anh-giao-tiep-it",
    title: "Tiếng Anh Giao Tiếp cho ngành IT",
    shortDescription: "Từ vựng, phản xạ giao tiếp và kỹ năng phỏng vấn tiếng Anh dành riêng cho dân công nghệ.",
    description:
      "Khoá học miễn phí giúp bạn tự tin giao tiếp tiếng Anh trong môi trường công nghệ: họp daily, viết báo cáo, và phỏng vấn xin việc với nhà tuyển dụng nước ngoài.",
    category: "Ngôn ngữ",
    level: "Cơ bản",
    access: "free",
    price: 0,
    thumbnail: "/images/courses/english.jpg",
    rating: 4.6,
    ratingCount: 301,
    studentsCount: 4310,
    lessonsCount: 26,
    duration: "14 giờ",
    updatedAt: "2026-07-18",
    hasTrial: true,
    trialNote: "Miễn phí toàn bộ khoá học",
    tags: ["Giao tiếp", "Phỏng vấn", "Từ vựng IT"],
    outcomes: [
      "Tự tin giao tiếp trong daily meeting",
      "Viết email và báo cáo công việc bằng tiếng Anh",
      "Luyện phỏng vấn tiếng Anh với nhà tuyển dụng",
    ],
    curriculum: [
      {
        title: "Giao tiếp công việc hàng ngày",
        lessons: [
          { title: "Mẫu câu họp daily/standup", duration: "11:00", preview: true },
        ],
      },
    ],
    classId: "marketing-k10",
  },
  {
    slug: "nhiep-anh-dung-noi-dung",
    title: "Nhập môn Nhiếp ảnh & Dựng nội dung",
    shortDescription: "Chụp ảnh, dựng video ngắn và kể chuyện bằng hình ảnh cho nhà sáng tạo nội dung.",
    description:
      "Khoá học dành cho người mới muốn làm nội dung số: từ cách dùng ánh sáng, bố cục, đến dựng video ngắn bằng điện thoại và các công cụ chỉnh sửa phổ biến.",
    category: "Sáng tạo",
    level: "Cơ bản",
    access: "paid",
    price: 990000,
    originalPrice: 1490000,
    thumbnail: "/images/courses/photography.jpg",
    rating: 4.8,
    ratingCount: 158,
    studentsCount: 980,
    lessonsCount: 30,
    duration: "16 giờ",
    updatedAt: "2026-09-02",
    hasTrial: true,
    trialNote: "Xem thử bài học đầu miễn phí",
    tags: ["Nhiếp ảnh", "Dựng video", "Content"],
    outcomes: [
      "Chụp ảnh đẹp chỉ với điện thoại",
      "Dựng video ngắn chuyên nghiệp",
      "Xây dựng concept nội dung cá nhân",
    ],
    curriculum: [
      {
        title: "Nền tảng hình ảnh",
        lessons: [
          { title: "Ánh sáng và bố cục cơ bản", duration: "13:40", preview: true },
        ],
      },
    ],
    classId: "office-k20",
  },
  {
    slug: "excel-google-sheet-cong-so",
    title: "Excel & Google Sheet công sở",
    shortDescription: "Hàm, pivot table, dashboard báo cáo — kỹ năng văn phòng không thể thiếu.",
    description:
      "Khoá học miễn phí trang bị kỹ năng Excel/Google Sheet cần thiết cho công việc văn phòng: từ hàm cơ bản, pivot table đến xây dashboard báo cáo tự động.",
    category: "Văn phòng",
    level: "Cơ bản",
    access: "free",
    price: 0,
    thumbnail: "/images/courses/excel.jpg",
    rating: 4.7,
    ratingCount: 410,
    studentsCount: 6230,
    lessonsCount: 22,
    duration: "10 giờ",
    updatedAt: "2026-06-14",
    hasTrial: true,
    trialNote: "Miễn phí toàn bộ khoá học",
    tags: ["Excel", "Google Sheet", "Pivot Table"],
    outcomes: [
      "Thành thạo các hàm Excel thông dụng",
      "Dựng báo cáo với Pivot Table",
      "Xây dashboard theo dõi công việc",
    ],
    curriculum: [
      {
        title: "Hàm cơ bản đến nâng cao",
        lessons: [
          { title: "Các hàm tính toán thường dùng", duration: "15:30", preview: true },
        ],
      },
    ],
    classId: "office-k20",
  },
  {
    slug: "mobile-app-react-native",
    title: "Lập trình Mobile App với React Native",
    shortDescription: "Xây dựng app iOS & Android từ một codebase bằng React Native & Expo.",
    description:
      "Dành cho người đã biết React, khoá học hướng dẫn xây dựng ứng dụng di động thực tế với React Native và Expo, kết nối API, push notification và publish lên store.",
    category: "Lập trình",
    level: "Trung bình",
    access: "paid",
    price: 2490000,
    originalPrice: 3190000,
    thumbnail: "/images/courses/mobile-app.jpg",
    rating: 4.7,
    ratingCount: 132,
    studentsCount: 760,
    lessonsCount: 58,
    duration: "32 giờ",
    updatedAt: "2026-10-28",
    hasTrial: false,
    trialNote: "Chỉ dành cho học viên đã đăng ký",
    tags: ["React Native", "Expo", "Mobile"],
    outcomes: [
      "Xây dựng app đa nền tảng iOS/Android",
      "Kết nối API và quản lý state thực tế",
      "Publish ứng dụng lên App Store/Play Store",
    ],
    curriculum: [
      {
        title: "Nhập môn React Native",
        lessons: [
          { title: "Thiết lập môi trường Expo", duration: "17:00", preview: false },
        ],
      },
    ],
    classId: "frontend-k8",
  },
  {
    slug: "ai-machine-learning-nhap-mon",
    title: "AI & Machine Learning Nhập Môn",
    shortDescription: "Hiểu và ứng dụng AI vào công việc thực tế — không cần nền tảng toán cao cấp.",
    description:
      "Khoá học giúp bạn hiểu bản chất Machine Learning, thực hành với các mô hình phổ biến, và quan trọng nhất — biết cách ứng dụng AI (bao gồm LLM) vào công việc hàng ngày.",
    category: "Dữ liệu",
    level: "Trung bình",
    access: "paid",
    price: 2690000,
    originalPrice: 3490000,
    thumbnail: "/images/courses/ai-ml.jpg",
    rating: 4.9,
    ratingCount: 221,
    studentsCount: 1540,
    lessonsCount: 46,
    duration: "30 giờ",
    updatedAt: "2026-11-01",
    hasTrial: true,
    trialNote: "Xem thử buổi khai giảng",
    tags: ["Machine Learning", "AI", "LLM"],
    outcomes: [
      "Hiểu bản chất các mô hình Machine Learning phổ biến",
      "Ứng dụng AI/LLM vào quy trình công việc",
      "Xây dựng một dự án AI mini hoàn chỉnh",
    ],
    curriculum: [
      {
        title: "Nền tảng AI hiện đại",
        lessons: [
          { title: "AI, ML, Deep Learning khác gì nhau?", duration: "16:45", preview: true },
        ],
      },
    ],
    classId: "ai-k3",
  },
  {
    slug: "khoi-nghiep-so-cho-nguoi-moi",
    title: "Khởi Nghiệp Số cho Người Mới Bắt Đầu",
    shortDescription: "Từ ý tưởng đến MVP — tư duy xây dựng sản phẩm số trong thời đại mới.",
    description:
      "Khoá học dành cho người muốn tự xây dựng sản phẩm/dịch vụ số của riêng mình: từ việc xác thực ý tưởng, xây MVP, đến tìm kiếm khách hàng đầu tiên.",
    category: "Kinh doanh",
    level: "Trung bình",
    access: "paid",
    price: 1790000,
    originalPrice: 2290000,
    thumbnail: "/images/courses/business.jpg",
    rating: 4.6,
    ratingCount: 94,
    studentsCount: 540,
    lessonsCount: 28,
    duration: "20 giờ",
    updatedAt: "2026-05-30",
    hasTrial: true,
    trialNote: "Xem thử bài học đầu miễn phí",
    tags: ["Startup", "MVP", "Product"],
    outcomes: [
      "Xác thực ý tưởng kinh doanh số",
      "Xây dựng MVP với nguồn lực hạn chế",
      "Tìm kiếm và giữ chân khách hàng đầu tiên",
    ],
    curriculum: [
      {
        title: "Từ ý tưởng đến MVP",
        lessons: [
          { title: "Xác thực ý tưởng trong 1 tuần", duration: "14:10", preview: true },
        ],
      },
    ],
    classId: "marketing-k10",
  },
  {
    slug: "san-xuat-nhac-so-co-ban",
    title: "Sản Xuất Nhạc Số Cơ Bản",
    shortDescription: "Làm beat, mix nhạc cơ bản trên phần mềm miễn phí — dành cho người mới bắt đầu.",
    description:
      "Khoá học miễn phí giới thiệu quy trình sản xuất nhạc số cơ bản: làm beat, thu âm, mix & master ở mức nền tảng bằng các phần mềm miễn phí phổ biến.",
    category: "Sáng tạo",
    level: "Cơ bản",
    access: "free",
    price: 0,
    thumbnail: "/images/courses/music.jpg",
    rating: 4.5,
    ratingCount: 76,
    studentsCount: 1120,
    lessonsCount: 20,
    duration: "9 giờ",
    updatedAt: "2026-04-12",
    hasTrial: true,
    trialNote: "Miễn phí toàn bộ khoá học",
    tags: ["Music Production", "Mixing"],
    outcomes: [
      "Làm beat cơ bản trên phần mềm miễn phí",
      "Thu âm và xử lý âm thanh tại nhà",
      "Mix & master một bản nhạc hoàn chỉnh",
    ],
    curriculum: [
      {
        title: "Làm quen sản xuất nhạc",
        lessons: [
          { title: "Tổng quan quy trình sản xuất nhạc", duration: "9:50", preview: true },
        ],
      },
    ],
    classId: "office-k20",
  },
];

export const students: Student[] = [
  { id: "hs-01", name: "Trần Thị Bảo Ngọc", avatar: "/images/avatars/avatar-03.jpg", email: "ngoc.tran@gmail.com", classId: "webdev-k15", progress: 82, status: "Đang học", joinedAt: "2026-09-14", lastActive: "2026-11-02" },
  { id: "hs-02", name: "Lê Hoàng Phúc", avatar: "/images/avatars/avatar-04.jpg", email: "phuc.le@gmail.com", classId: "webdev-k15", progress: 65, status: "Đang học", joinedAt: "2026-09-14", lastActive: "2026-11-01" },
  { id: "hs-03", name: "Nguyễn Minh Anh", avatar: "/images/avatars/avatar-05.jpg", email: "minhanh.nguyen@gmail.com", classId: "frontend-k8", progress: 91, status: "Đang học", joinedAt: "2026-10-01", lastActive: "2026-11-03" },
  { id: "hs-04", name: "Phạm Gia Huy", avatar: "/images/avatars/avatar-12.jpg", email: "giahuy.pham@gmail.com", classId: "frontend-k8", progress: 40, status: "Tạm nghỉ", joinedAt: "2026-10-01", lastActive: "2026-10-18" },
  { id: "hs-05", name: "Đỗ Thuỳ Linh", avatar: "/images/avatars/avatar-07.jpg", email: "linh.do@gmail.com", classId: "uiux-k8", progress: 15, status: "Đang học", joinedAt: "2026-10-25", lastActive: "2026-11-02" },
  { id: "hs-06", name: "Vũ Quang Huy", avatar: "/images/avatars/avatar-13.jpg", email: "quanghuy.vu@gmail.com", classId: "data-k5", progress: 100, status: "Hoàn thành", joinedAt: "2026-08-10", lastActive: "2026-10-30" },
  { id: "hs-07", name: "Hoàng Yến Nhi", avatar: "/images/avatars/avatar-09.jpg", email: "yennhi.hoang@gmail.com", classId: "data-k5", progress: 73, status: "Đang học", joinedAt: "2026-08-10", lastActive: "2026-11-03" },
  { id: "hs-08", name: "Bùi Thế Anh", avatar: "/images/avatars/avatar-06.jpg", email: "theanh.bui@gmail.com", classId: "ai-k3", progress: 58, status: "Đang học", joinedAt: "2026-09-27", lastActive: "2026-11-01" },
  { id: "hs-09", name: "Ngô Khánh Vy", avatar: "/images/avatars/avatar-11.jpg", email: "khanhvy.ngo@gmail.com", classId: "ai-k3", progress: 30, status: "Đang học", joinedAt: "2026-09-27", lastActive: "2026-10-29" },
  { id: "hs-10", name: "Trịnh Nam Khánh", avatar: "/images/avatars/avatar-10.jpg", email: "namkhanh.trinh@gmail.com", classId: "office-k20", progress: 100, status: "Hoàn thành", joinedAt: "2026-07-01", lastActive: "2026-10-12" },
  { id: "hs-11", name: "Lý Thị Mỹ Duyên", avatar: "/images/avatars/avatar-14.jpg", email: "myduyen.ly@gmail.com", classId: "office-k20", progress: 47, status: "Đang học", joinedAt: "2026-07-01", lastActive: "2026-11-02" },
  { id: "hs-12", name: "Đặng Hải Đăng", avatar: "/images/avatars/avatar-01.jpg", email: "haidang.dang@gmail.com", classId: "webdev-k15", progress: 12, status: "Tạm nghỉ", joinedAt: "2026-09-20", lastActive: "2026-10-05" },
];

export const posts: Post[] = [
  {
    id: "post-01",
    title: "Lộ trình trở thành Frontend Developer trong 6 tháng",
    excerpt: "Một lộ trình chi tiết, thực tế cho người mới bắt đầu — không lan man, không học thừa.",
    content: "Nội dung chi tiết về lộ trình học Frontend trong 6 tháng, bao gồm các cột mốc theo từng tháng và dự án thực hành đi kèm...",
    cover: "/images/misc/code-screen.jpg",
    tag: "Lập trình",
    status: "Đã đăng",
    publishedAt: "2026-10-28",
    views: 4280,
    comments: 56,
    readTime: "6 phút đọc",
  },
  {
    id: "post-02",
    title: "5 lỗi phổ biến khiến người mới học Python nản chí",
    excerpt: "Hầu hết người học bỏ cuộc không phải vì Python khó, mà vì học sai cách.",
    content: "Phân tích 5 lỗi phổ biến nhất và cách khắc phục khi mới học Python...",
    cover: "/images/misc/notes.jpg",
    tag: "Dữ liệu",
    status: "Đã đăng",
    publishedAt: "2026-10-15",
    views: 3190,
    comments: 41,
    readTime: "5 phút đọc",
  },
  {
    id: "post-03",
    title: "Cách xin việc IT không cần kinh nghiệm thực chiến",
    excerpt: "Portfolio quan trọng hơn CV. Đây là cách xây dựng portfolio khiến nhà tuyển dụng chú ý.",
    content: "Chia sẻ chiến lược xây dựng portfolio và chuẩn bị phỏng vấn cho người chưa có kinh nghiệm...",
    cover: "/images/misc/home-office.jpg",
    tag: "Hướng nghiệp",
    status: "Đã đăng",
    publishedAt: "2026-09-30",
    views: 6720,
    comments: 98,
    readTime: "8 phút đọc",
  },
  {
    id: "post-04",
    title: "Figma Tips: 10 phím tắt giúp bạn thiết kế nhanh gấp đôi",
    excerpt: "Những phím tắt mình dùng mỗi ngày khi làm UI/UX, tiết kiệm hàng giờ mỗi tuần.",
    content: "Danh sách 10 phím tắt Figma hữu ích nhất kèm ví dụ minh hoạ...",
    cover: "/images/misc/study-group.jpg",
    tag: "Thiết kế",
    status: "Bản nháp",
    publishedAt: "2026-11-05",
    views: 0,
    comments: 0,
    readTime: "4 phút đọc",
  },
  {
    id: "post-05",
    title: "AI sẽ thay thế developer? Góc nhìn sau 6 năm làm sản phẩm",
    excerpt: "Câu trả lời ngắn: không, nhưng cách làm việc của developer đang thay đổi rất nhanh.",
    content: "Góc nhìn cá nhân về tác động của AI tới nghề lập trình và lời khuyên cho người mới...",
    cover: "/images/misc/classroom.jpg",
    tag: "AI",
    status: "Đã đăng",
    publishedAt: "2026-11-01",
    views: 2450,
    comments: 33,
    readTime: "7 phút đọc",
  },
];

export const videos: Video[] = [
  { id: "vid-01", title: "Buổi 1: Tổng quan khoá Web Fullstack", thumbnail: "/images/courses/web-dev.jpg", duration: "18:24", courseSlug: "lap-trinh-web-fullstack", status: "Công khai", uploadedAt: "2026-09-14", views: 8920 },
  { id: "vid-02", title: "Flexbox & Grid Layout thực chiến", thumbnail: "/images/misc/code-screen.jpg", duration: "28:33", courseSlug: "lap-trinh-web-fullstack", status: "Công khai", uploadedAt: "2026-09-21", views: 6410 },
  { id: "vid-03", title: "React Server Components giải thích dễ hiểu", thumbnail: "/images/courses/web-dev-2.jpg", duration: "26:40", courseSlug: "frontend-nang-cao-react-nextjs", status: "Công khai", uploadedAt: "2026-10-05", views: 4120 },
  { id: "vid-04", title: "Live Q&A: Gỡ lỗi Next.js cùng học viên", thumbnail: "/images/misc/webcam-recording.jpg", duration: "52:10", courseSlug: "frontend-nang-cao-react-nextjs", status: "Riêng tư", uploadedAt: "2026-10-19", views: 980 },
  { id: "vid-05", title: "Dựng Design System trên Figma", thumbnail: "/images/courses/ui-ux.jpg", duration: "32:10", courseSlug: "uiux-design-thinking", status: "Công khai", uploadedAt: "2026-10-02", views: 3350 },
  { id: "vid-06", title: "SQL JOIN giải thích bằng hình ảnh", thumbnail: "/images/courses/data-science.jpg", duration: "24:30", courseSlug: "data-analyst-python-sql", status: "Công khai", uploadedAt: "2026-08-20", views: 5230 },
  { id: "vid-07", title: "AI/LLM ứng dụng vào công việc hàng ngày", thumbnail: "/images/courses/ai-ml.jpg", duration: "22:15", courseSlug: "ai-machine-learning-nhap-mon", status: "Công khai", uploadedAt: "2026-10-30", views: 2870 },
  { id: "vid-08", title: "Buổi quay mới: Hậu trường dựng nội dung", thumbnail: "/images/misc/video-lesson.jpg", duration: "15:48", courseSlug: "nhiep-anh-dung-noi-dung", status: "Đang xử lý", uploadedAt: "2026-11-02", views: 0 },
];

export const testimonials: Testimonial[] = [
  {
    name: "Trần Thị Bảo Ngọc",
    avatar: "/images/avatars/avatar-03.jpg",
    role: "Học viên Web Fullstack K15",
    rating: 5,
    quote: "Thầy Khôi giảng rất dễ hiểu, bài tập sát thực tế. Mình từ chưa biết gì đã tự làm được website cá nhân sau 3 tháng.",
    courseSlug: "lap-trinh-web-fullstack",
  },
  {
    name: "Vũ Quang Huy",
    avatar: "/images/avatars/avatar-13.jpg",
    role: "Học viên Data Analyst K5",
    rating: 5,
    quote: "Khoá Data Analyst giúp mình chuyển ngành thành công. Nội dung thực chiến, không lý thuyết suông.",
    courseSlug: "data-analyst-python-sql",
  },
  {
    name: "Đỗ Thuỳ Linh",
    avatar: "/images/avatars/avatar-07.jpg",
    role: "Học viên UI/UX Sprint K8",
    rating: 5,
    quote: "Mình thích nhất là được feedback trực tiếp trên bài làm mỗi tuần, tiến bộ thấy rõ từng buổi học.",
    courseSlug: "uiux-design-thinking",
  },
  {
    name: "Bùi Thế Anh",
    avatar: "/images/avatars/avatar-06.jpg",
    role: "Học viên AI Builder K3",
    rating: 4,
    quote: "Chủ đề AI khó nhưng thầy giải thích rất trực quan, dễ liên hệ vào công việc thực tế của mình.",
    courseSlug: "ai-machine-learning-nhap-mon",
  },
  {
    name: "Hoàng Yến Nhi",
    avatar: "/images/avatars/avatar-09.jpg",
    role: "Học viên Data Analyst K5",
    rating: 5,
    quote: "Cộng đồng học viên rất nhiệt tình, hỏi gì cũng được hỗ trợ nhanh. Rất đáng tiền.",
    courseSlug: "data-analyst-python-sql",
  },
];

export const platformStats = [
  { label: "Học viên đã theo học", value: "18,400+" },
  { label: "Khoá học đang mở", value: "12" },
  { label: "Đánh giá trung bình", value: "4.9/5" },
  { label: "Năm kinh nghiệm giảng dạy", value: "6" },
];

export function getCourseBySlug(slug: string) {
  return courses.find((c) => c.slug === slug);
}

export function getClassById(id: string) {
  return classes.find((c) => c.id === id);
}

export function formatVnd(amount: number) {
  if (amount === 0) return "Miễn phí";
  return amount.toLocaleString("vi-VN") + "đ";
}

export function formatDateVn(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" });
}
