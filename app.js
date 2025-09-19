// Application State
let currentUser = null;
let currentUserType = null;
let currentDoctorTab = "overview";
let currentPatientTab = "overview";
let currentHospitalTab = "overview";
let currentStoreTab = "overview";
let currentLabTab = "overview";
let currentBloodBankTab = "overview";

// Sample Data with comprehensive medical platform data
const sampleData = {
  currentDoctor: {
    id: "D001",
    name: "Dr. Amit Verma",
    specialization: "Cardiologist",
    experience: "12 years",
    hospital: "Apollo Hospital",
    license: "MCI-12345-DL",
    phone: "+91-9876543210",
    email: "s123@gmail.com",
    consultationFee: 500,
    rating: 4.8,
    totalPatients: 125,
    monthlyEarnings: 45000,
    totalCommission: 2400,
    availableSlots: ["10:00 AM", "2:00 PM", "4:00 PM"],
    password: "123456",
  },

  todayAppointments: [
    {
      id: "A001",
      patientId: "P001",
      patientName: "Rajesh Kumar",
      age: 35,
      time: "10:00 AM",
      type: "Follow-up",
      duration: "30 mins",
      status: "Scheduled",
      lastVisit: "2024-12-15",
      condition: "Diabetes Type 2",
      phone: "+91-9876543210",
      priority: "Normal",
    },
    {
      id: "A002",
      patientId: "P003",
      patientName: "Priya Sharma",
      age: 28,
      time: "11:00 AM",
      type: "New Patient",
      duration: "45 mins",
      status: "Checked In",
      lastVisit: "N/A",
      condition: "Chest Pain",
      phone: "+91-9876543211",
      priority: "High",
    },
    {
      id: "A003",
      patientId: "P004",
      patientName: "Vikash Singh",
      age: 42,
      time: "2:00 PM",
      type: "Consultation",
      duration: "30 mins",
      status: "Scheduled",
      lastVisit: "2024-11-20",
      condition: "Hypertension",
      phone: "+91-9876543212",
      priority: "Normal",
    },
  ],

  patientDirectory: [
    {
      id: "P001",
      name: "Rajesh Kumar",
      age: 35,
      bloodGroup: "B+",
      phone: "+91-9876543210",
      email: "s123@gmail.com",
      lastVisit: "2024-12-15",
      condition: "Diabetes Type 2, Hypertension",
      status: "Regular Patient",
      permissionGranted: true,
      emergencyContact: "Sunita Kumar",
    },
    {
      id: "P003",
      name: "Priya Sharma",
      age: 28,
      bloodGroup: "A+",
      phone: "+91-9876543211",
      email: "s123@gmail.com",
      lastVisit: "N/A",
      condition: "New Patient",
      status: "New Patient",
      permissionGranted: false,
      emergencyContact: "Rahul Sharma",
    },
    {
      id: "P004",
      name: "Vikash Singh",
      age: 42,
      bloodGroup: "O+",
      phone: "+91-9876543212",
      email: "s123@gmail.com",
      lastVisit: "2024-11-20",
      condition: "Hypertension",
      status: "Regular Patient",
      permissionGranted: true,
      emergencyContact: "Neha Singh",
    },
  ],

  permissionRequests: [
    {
      id: "PR001",
      patientId: "P003",
      patientName: "Priya Sharma",
      requestDate: "2025-01-19",
      status: "Pending",
      requestType: "Medical History Access",
      reason: "First consultation - need to review previous medical records",
    },
  ],

  medicalAlerts: [
    {
      type: "Drug Interaction",
      message: "Metformin + Alcohol interaction warning for Patient P001",
      severity: "Moderate",
      timestamp: "Today, 9:30 AM",
    },
    {
      type: "Lab Alert",
      message: "Abnormal HbA1c levels detected for Patient P004",
      severity: "High",
      timestamp: "Yesterday, 4:15 PM",
    },
  ],

  prescriptionTemplates: [
    {
      name: "Diabetes Management",
      medications: [
        { drug: "Metformin", dosage: "500mg", frequency: "Twice daily" },
        { drug: "Glimepiride", dosage: "1mg", frequency: "Once daily" },
      ],
    },
    {
      name: "Hypertension Treatment",
      medications: [
        { drug: "Amlodipine", dosage: "5mg", frequency: "Once daily" },
        { drug: "Atenolol", dosage: "25mg", frequency: "Once daily" },
      ],
    },
  ],

  commissionTracking: [
    {
      pharmacy: "HealthPlus Pharmacy",
      prescriptionId: "RX001",
      patientName: "Rajesh Kumar",
      verificationDate: "2025-01-15",
      commission: 125,
      status: "Paid",
      medicationValue: 2500,
    },
    {
      pharmacy: "Apollo Pharmacy",
      prescriptionId: "RX002",
      patientName: "Vikash Singh",
      verificationDate: "2025-01-10",
      commission: 85,
      status: "Pending",
      medicationValue: 1700,
    },
  ],

  // Sample data for other user types
  hospitals: [
    {
      id: "H001",
      name: "Apollo Hospital",
      address: "Sector 26, Noida",
      phone: "+91-120-2588888",
      email: "s123@gmail.com",
      password: "123456",
      totalDoctors: 45,
      totalBeds: 150,
      occupiedBeds: 120,
      emergencyCases: 12,
      monthlyRevenue: 850000,
    },
  ],

  medicalStores: [
    {
      id: "MS001",
      name: "HealthPlus Pharmacy",
      address: "Main Market, Delhi",
      phone: "+91-11-12345678",
      email: "s123@gmail.com",
      password: "123456",
      verifiedPrescriptions: 156,
      monthlyCommission: 18000,
      medicinesInStock: 2450,
      monthlySales: 45000,
    },
  ],

  laboratories: [
    {
      id: "L001",
      name: "DiagnosticCenter Plus",
      address: "Medical Complex, Mumbai",
      phone: "+91-22-87654321",
      email: "s123@gmail.com",
      password: "123456",
      testsToday: 89,
      pendingResults: 156,
      avgTurnaround: 2.5,
      monthlyRevenue: 28000,
    },
  ],

  bloodBanks: [
    {
      id: "BB001",
      name: "City Blood Bank",
      address: "Central Hospital, Delhi",
      phone: "+91-11-55667788",
      email: "s123@gmail.com",
      password: "123456",
      totalUnits: 450,
      activeDonors: 1250,
      emergencyRequests: 8,
      donationsToday: 25,
    },
  ],

  patients: [
    {
      id: "P001",
      name: "Rajesh Kumar",
      age: 35,
      bloodGroup: "B+",
      mobile: "+91-9876543210",
      email: "s123@gmail.com",
      password: "123456",
      rewardPoints: 250,
      cashbackEarned: 180,
      totalAppointments: 5,
      medicalRecords: 8,
    },
  ],
};

// Global function declarations
window.showLogin = showLogin;
window.showRegister = showRegister;
window.closeModal = closeModal;
window.showUserTypeFields = showUserTypeFields;
window.logout = logout;
window.showDoctorTab = showDoctorTab;
window.showPatientTab = showPatientTab;
window.showHospitalTab = showHospitalTab;
window.showStoreTab = showStoreTab;
window.showLabTab = showLabTab;
window.showBloodBankTab = showBloodBankTab;
window.showBookAppointment = showBookAppointment;
window.requestPatientData = requestPatientData;
window.searchPatients = searchPatients;
window.showAvailabilitySettings = showAvailabilitySettings;
window.showPrescriptionPad = showPrescriptionPad;
window.showUploadRecord = showUploadRecord;
window.showEmergencyAccess = showEmergencyAccess;
window.callEmergency = callEmergency;
window.shareEmergencyData = shareEmergencyData;
window.addNewDoctor = addNewDoctor;
window.scanPrescription = scanPrescription;
window.verifyPrescription = verifyPrescription;
window.addMedicine = addMedicine;
window.updateStock = updateStock;
window.scheduleTest = scheduleTest;
window.uploadResults = uploadResults;
window.scheduleMaintenace = scheduleMaintenace;
window.addBloodUnit = addBloodUnit;
window.updateExpiry = updateExpiry;
window.registerDonor = registerDonor;
window.sendDonorReminder = sendDonorReminder;
window.createBloodRequest = createBloodRequest;
window.createCampaign = createCampaign;

// Initialize Application
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded, initializing app...");
  initializeApp();
});

function initializeApp() {
  console.log("Initializing application...");
  showLandingPage();
  setupEventListeners();

  // Set minimum date for appointments to today
  const today = new Date().toISOString().split("T")[0];
  const appointmentDateInput = document.getElementById("appointmentDate");
  if (appointmentDateInput) {
    appointmentDateInput.min = today;
  }

  console.log("Application initialized successfully");
}

function setupEventListeners() {
  console.log("Setting up event listeners...");

  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", handleLogin);
  }

  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", handleRegistration);
  }

  const bookAppointmentForm = document.getElementById("bookAppointmentForm");
  if (bookAppointmentForm) {
    bookAppointmentForm.addEventListener("submit", handleBookAppointment);
  }

  const requestDataForm = document.getElementById("requestDataForm");
  if (requestDataForm) {
    requestDataForm.addEventListener("submit", handleRequestData);
  }

  console.log("Event listeners set up successfully");
}

// Authentication Functions
function showLogin() {
  console.log("Showing login modal...");
  const modal = document.getElementById("loginModal");
  if (modal) {
    modal.classList.remove("hidden");
  }
}

function showRegister() {
  console.log("Showing register modal...");
  const modal = document.getElementById("registerModal");
  if (modal) {
    modal.classList.remove("hidden");
  }
}

function closeModal(modalId) {
  console.log("Closing modal:", modalId);
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("hidden");
  }
}

function showUserTypeFields() {
  const userType = document.getElementById("registerUserType").value;
  const commonFields = document.getElementById("commonFields");

  if (userType && commonFields) {
    commonFields.classList.remove("hidden");
  } else if (commonFields) {
    commonFields.classList.add("hidden");
  }
}

function handleLogin(e) {
  e.preventDefault();
  console.log("Handling login...");

  const userType = document.getElementById("loginUserType").value;
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  let user = null;

  switch (userType) {
    case "patient":
      user = sampleData.patients.find(
        (p) => p.email === email && p.password === password
      );
      break;
    case "doctor":
      user = sampleData.currentDoctor;
      if (user.email === email && user.password === password) {
        // Valid doctor
      } else {
        user = null;
      }
      break;
    case "hospital":
      user = sampleData.hospitals.find(
        (h) => h.email === email && h.password === password
      );
      break;
    case "medical_store":
      user = sampleData.medicalStores.find(
        (m) => m.email === email && m.password === password
      );
      break;
    case "laboratory":
      user = sampleData.laboratories.find(
        (l) => l.email === email && l.password === password
      );
      break;
    case "blood_bank":
      user = sampleData.bloodBanks.find(
        (b) => b.email === email && b.password === password
      );
      break;
  }

  if (user) {
    console.log("Login successful for user:", user.name);
    currentUser = user;
    currentUserType = userType;
    closeModal("loginModal");
    showDashboard(userType);
    updateNavigation();
  } else {
    console.log("Login failed");
    alert(
      "Invalid credentials. Try:\nDoctor: s123@gmail.com / 123456\nPatient: s123@gmail.com / 123456\nHospital: s123@gmail.com / 123456"
    );
  }
}

function handleRegistration(e) {
  e.preventDefault();
  console.log("Handling registration...");

  const userType = document.getElementById("registerUserType").value;
  const name = document.getElementById("registerName").value;
  const email = document.getElementById("registerEmail").value;

  alert(
    `Registration successful for ${name} as ${userType}!\nYou can now login with your credentials.`
  );
  closeModal("registerModal");
  showLogin();
}

function logout() {
  console.log("Logging out...");
  currentUser = null;
  currentUserType = null;
  showLandingPage();
  updateNavigation();
}

function updateNavigation() {
  const navActions = document.getElementById("navActions");
  const userMenu = document.getElementById("userMenu");
  const userName = document.getElementById("userName");
  const userTypeEl = document.getElementById("userType");

  if (currentUser) {
    navActions.classList.add("hidden");
    userMenu.classList.remove("hidden");
    userName.textContent = currentUser.name;
    userTypeEl.textContent = currentUserType.replace("_", " ").toUpperCase();
  } else {
    navActions.classList.remove("hidden");
    userMenu.classList.add("hidden");
  }
}

// Dashboard Functions
function showLandingPage() {
  console.log("Showing landing page...");

  const dashboards = [
    "doctorDashboard",
    "patientDashboard",
    "hospitalDashboard",
    "medicalStoreDashboard",
    "laboratoryDashboard",
    "bloodBankDashboard",
  ];
  dashboards.forEach((id) => {
    const dashboard = document.getElementById(id);
    if (dashboard) dashboard.classList.add("hidden");
  });

  const landingPage = document.getElementById("landingPage");
  if (landingPage) landingPage.classList.remove("hidden");
}

function showDashboard(userType) {
  console.log("Showing dashboard for user type:", userType);

  const landingPage = document.getElementById("landingPage");
  if (landingPage) landingPage.classList.add("hidden");

  const dashboards = [
    "doctorDashboard",
    "patientDashboard",
    "hospitalDashboard",
    "medicalStoreDashboard",
    "laboratoryDashboard",
    "bloodBankDashboard",
  ];
  dashboards.forEach((id) => {
    const dashboard = document.getElementById(id);
    if (dashboard) dashboard.classList.add("hidden");
  });

  let targetDashboard;
  switch (userType) {
    case "doctor":
      targetDashboard = document.getElementById("doctorDashboard");
      if (targetDashboard) {
        targetDashboard.classList.remove("hidden");
        loadDoctorDashboard();
      }
      break;
    case "patient":
      targetDashboard = document.getElementById("patientDashboard");
      if (targetDashboard) {
        targetDashboard.classList.remove("hidden");
        loadPatientDashboard();
      }
      break;
    case "hospital":
      targetDashboard = document.getElementById("hospitalDashboard");
      if (targetDashboard) {
        targetDashboard.classList.remove("hidden");
        loadHospitalDashboard();
      }
      break;
    case "medical_store":
      targetDashboard = document.getElementById("medicalStoreDashboard");
      if (targetDashboard) {
        targetDashboard.classList.remove("hidden");
        loadMedicalStoreDashboard();
      }
      break;
    case "laboratory":
      targetDashboard = document.getElementById("laboratoryDashboard");
      if (targetDashboard) {
        targetDashboard.classList.remove("hidden");
        loadLaboratoryDashboard();
      }
      break;
    case "blood_bank":
      targetDashboard = document.getElementById("bloodBankDashboard");
      if (targetDashboard) {
        targetDashboard.classList.remove("hidden");
        loadBloodBankDashboard();
      }
      break;
  }
}

// DOCTOR DASHBOARD FUNCTIONS
function showDoctorTab(tabName) {
  console.log("Showing doctor tab:", tabName);

  const tabs = [
    "overview",
    "patients",
    "appointments",
    "prescriptions",
    "analytics",
    "earnings",
  ];
  tabs.forEach((tab) => {
    const element = document.getElementById(
      `doctor${tab.charAt(0).toUpperCase() + tab.slice(1)}`
    );
    if (element) element.classList.add("hidden");
  });

  const selectedTab = document.getElementById(
    `doctor${tabName.charAt(0).toUpperCase() + tabName.slice(1)}`
  );
  if (selectedTab) selectedTab.classList.remove("hidden");

  const allTabs = document.querySelectorAll(
    "#doctorDashboard .dashboard-nav .nav-tab"
  );
  allTabs.forEach((tab) => tab.classList.remove("active"));

  const tabButtons = Array.from(allTabs);
  const activeButton = tabButtons.find((btn) =>
    btn.textContent.toLowerCase().includes(tabName.toLowerCase())
  );
  if (activeButton) activeButton.classList.add("active");

  currentDoctorTab = tabName;

  switch (tabName) {
    case "patients":
      loadDoctorPatients();
      break;
    case "appointments":
      loadDoctorAppointments();
      break;
    case "prescriptions":
      loadDoctorPrescriptions();
      break;
    case "analytics":
      loadDoctorAnalytics();
      break;
    case "earnings":
      loadDoctorEarnings();
      break;
  }
}

function loadDoctorDashboard() {
  if (!currentUser) return;

  // Update doctor info
  const doctorNameEl = document.getElementById("doctorName");
  const doctorSpecialtyEl = document.getElementById("doctorSpecialty");
  const doctorExperienceEl = document.getElementById("doctorExperience");

  if (doctorNameEl) doctorNameEl.textContent = currentUser.name;
  if (doctorSpecialtyEl)
    doctorSpecialtyEl.textContent = currentUser.specialization;
  if (doctorExperienceEl)
    doctorExperienceEl.textContent = `${currentUser.experience} experience`;

  // Update stats
  const totalPatientsEl = document.getElementById("totalPatients");
  const todayAppointmentsEl = document.getElementById("todayAppointments");
  const monthlyEarningsEl = document.getElementById("monthlyEarnings");
  const doctorRatingEl = document.getElementById("doctorRating");

  if (totalPatientsEl) totalPatientsEl.textContent = currentUser.totalPatients;
  if (todayAppointmentsEl)
    todayAppointmentsEl.textContent = sampleData.todayAppointments.length;
  if (monthlyEarningsEl)
    monthlyEarningsEl.textContent = `₹${currentUser.monthlyEarnings.toLocaleString()}`;
  if (doctorRatingEl) doctorRatingEl.textContent = currentUser.rating;

  // Load today's schedule
  loadTodaySchedule();
  loadMedicalAlerts();
  loadPendingPermissions();
}

function loadTodaySchedule() {
  const todaySchedule = document.getElementById("todaySchedule");
  if (!todaySchedule) return;

  if (sampleData.todayAppointments.length === 0) {
    todaySchedule.innerHTML =
      '<div class="empty-state"><h4>No appointments today</h4><p>Enjoy your free day!</p></div>';
    return;
  }

  todaySchedule.innerHTML = sampleData.todayAppointments
    .map(
      (apt) => `
    <div class="schedule-item priority-${apt.priority.toLowerCase()}">
      <div class="schedule-time">${apt.time}</div>
      <div class="schedule-patient">${apt.patientName}</div>
      <div class="schedule-type">${apt.type}</div>
      <div class="appointment-status status-${apt.status.toLowerCase()}">${
        apt.status
      }</div>
    </div>
  `
    )
    .join("");
}

function loadMedicalAlerts() {
  const medicalAlerts = document.getElementById("medicalAlerts");
  if (!medicalAlerts) return;

  medicalAlerts.innerHTML = sampleData.medicalAlerts
    .map(
      (alert) => `
    <div class="alert-card alert-${alert.severity.toLowerCase()}">
      <div class="alert-icon">⚠️</div>
      <div class="alert-content">
        <h5>${alert.type}</h5>
        <p>${alert.message}</p>
        <small>${alert.timestamp}</small>
      </div>
    </div>
  `
    )
    .join("");
}

function loadPendingPermissions() {
  const pendingPermissions = document.getElementById("pendingPermissions");
  if (!pendingPermissions) return;

  if (sampleData.permissionRequests.length === 0) {
    pendingPermissions.innerHTML =
      '<div class="empty-state"><h4>No pending requests</h4><p>All permissions are up to date</p></div>';
    return;
  }

  pendingPermissions.innerHTML = sampleData.permissionRequests
    .map(
      (req) => `
    <div class="request-card">
      <div class="request-info">
        <h5>Permission Request - ${req.patientName}</h5>
        <p><strong>Type:</strong> ${req.requestType}</p>
        <p><strong>Reason:</strong> ${req.reason}</p>
        <p><strong>Date:</strong> ${req.requestDate}</p>
      </div>
      <div class="request-actions">
        <span class="status--${req.status.toLowerCase()}">${req.status}</span>
      </div>
    </div>
  `
    )
    .join("");
}

function loadDoctorPatients() {
  const patientsDirectory = document.getElementById("patientsDirectory");
  if (!patientsDirectory) return;

  patientsDirectory.innerHTML = sampleData.patientDirectory
    .map(
      (patient) => `
    <div class="patient-card">
      <h4>${patient.name}</h4>
      <div class="patient-info">
        <p><strong>ID:</strong> ${patient.id}</p>
        <p><strong>Age:</strong> ${patient.age}</p>
        <p><strong>Blood Group:</strong> <span class="blood-group-badge">${patient.bloodGroup}</span></p>
        <p><strong>Phone:</strong> ${patient.phone}</p>
        <p><strong>Condition:</strong> ${patient.condition}</p>
        <p><strong>Last Visit:</strong> ${patient.lastVisit}</p>
        <p><strong>Status:</strong> ${patient.status}</p>
      </div>
      <div class="patient-actions">
        <button class="btn btn--sm btn--primary" onclick="requestPatientData('${patient.id}')">Request Access</button>
        <button class="btn btn--sm btn--outline" onclick="viewPatientHistory('${patient.id}')">View History</button>
      </div>
    </div>
  `
    )
    .join("");
}

function loadDoctorAppointments() {
  const doctorAppointmentsList = document.getElementById(
    "doctorAppointmentsList"
  );
  if (!doctorAppointmentsList) return;

  doctorAppointmentsList.innerHTML = sampleData.todayAppointments
    .map(
      (apt) => `
    <div class="appointment-card priority-${apt.priority.toLowerCase()}">
      <div class="appointment-details">
        <h4>${apt.patientName}</h4>
        <p><strong>Age:</strong> ${apt.age}</p>
        <p><strong>Time:</strong> ${apt.time}</p>
        <p><strong>Type:</strong> ${apt.type}</p>
        <p><strong>Condition:</strong> ${apt.condition}</p>
        <p><strong>Phone:</strong> ${apt.phone}</p>
      </div>
      <div class="appointment-actions">
        <div class="appointment-status status-${apt.status.toLowerCase()}">${
        apt.status
      }</div>
        ${
          apt.status === "Scheduled"
            ? '<button class="btn btn--sm btn--primary">Start Consultation</button>'
            : ""
        }
      </div>
    </div>
  `
    )
    .join("");
}

function loadDoctorPrescriptions() {
  const prescriptionTemplates = document.getElementById(
    "prescriptionTemplates"
  );
  if (prescriptionTemplates) {
    prescriptionTemplates.innerHTML = sampleData.prescriptionTemplates
      .map(
        (template) => `
      <div class="template-card" onclick="usePrescriptionTemplate('${
        template.name
      }')">
        <h5>${template.name}</h5>
        <div class="medication-list">
          ${template.medications
            .map((med) => `<p>${med.drug} ${med.dosage} - ${med.frequency}</p>`)
            .join("")}
        </div>
      </div>
    `
      )
      .join("");
  }

  const recentPrescriptions = document.getElementById("recentPrescriptions");
  if (recentPrescriptions) {
    recentPrescriptions.innerHTML =
      '<div class="empty-state"><h4>No recent prescriptions</h4><p>Prescriptions will appear here after consultations</p></div>';
  }
}

function loadDoctorAnalytics() {
  // Load consultation chart
  setTimeout(() => {
    const consultationsCtx = document.getElementById("consultationsChart");
    if (consultationsCtx && typeof Chart !== "undefined") {
      new Chart(consultationsCtx.getContext("2d"), {
        type: "line",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              label: "Monthly Consultations",
              data: [35, 42, 38, 45, 41, 48],
              borderColor: "#1FB8CD",
              backgroundColor: "rgba(31, 184, 205, 0.1)",
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    }
  }, 100);

  // Load demographics chart
  setTimeout(() => {
    const demographicsCtx = document.getElementById("demographicsChart");
    if (demographicsCtx && typeof Chart !== "undefined") {
      new Chart(demographicsCtx.getContext("2d"), {
        type: "doughnut",
        data: {
          labels: ["18-30", "31-45", "46-60", "60+"],
          datasets: [
            {
              data: [25, 35, 30, 10],
              backgroundColor: ["#1FB8CD", "#FFC185", "#B4413C", "#5D878F"],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    }
  }, 200);
}

function loadDoctorEarnings() {
  const commissionList = document.getElementById("commissionList");
  if (!commissionList) return;

  commissionList.innerHTML = sampleData.commissionTracking
    .map(
      (comm) => `
    <div class="commission-item">
      <div class="commission-details">
        <h5>${comm.pharmacy}</h5>
        <p><strong>Patient:</strong> ${comm.patientName}</p>
        <p><strong>Prescription ID:</strong> ${comm.prescriptionId}</p>
        <p><strong>Date:</strong> ${comm.verificationDate}</p>
        <p><strong>Medication Value:</strong> ₹${comm.medicationValue}</p>
      </div>
      <div class="commission-amount">
        <div class="commission-value">₹${comm.commission}</div>
        <div class="status--${comm.status.toLowerCase()}">${comm.status}</div>
      </div>
    </div>
  `
    )
    .join("");
}

// PATIENT DASHBOARD FUNCTIONS
function showPatientTab(tabName) {
  console.log("Showing patient tab:", tabName);

  const tabs = ["overview", "appointments", "records", "rewards", "emergency"];
  tabs.forEach((tab) => {
    const element = document.getElementById(
      `patient${tab.charAt(0).toUpperCase() + tab.slice(1)}`
    );
    if (element) element.classList.add("hidden");
  });

  const selectedTab = document.getElementById(
    `patient${tabName.charAt(0).toUpperCase() + tabName.slice(1)}`
  );
  if (selectedTab) selectedTab.classList.remove("hidden");

  const allTabs = document.querySelectorAll(
    "#patientDashboard .dashboard-nav .nav-tab"
  );
  allTabs.forEach((tab) => tab.classList.remove("active"));

  const tabButtons = Array.from(allTabs);
  const activeButton = tabButtons.find((btn) =>
    btn.textContent.toLowerCase().includes(tabName.toLowerCase())
  );
  if (activeButton) activeButton.classList.add("active");

  currentPatientTab = tabName;
}

function loadPatientDashboard() {
  if (!currentUser) return;

  const patientNameEl = document.getElementById("patientName");
  if (patientNameEl) patientNameEl.textContent = currentUser.name;

  // Update stats
  const rewardPointsEl = document.getElementById("rewardPoints");
  const cashbackEarnedEl = document.getElementById("cashbackEarned");
  const patientAppointmentsEl = document.getElementById("patientAppointments");
  const medicalRecordsEl = document.getElementById("medicalRecords");

  if (rewardPointsEl)
    rewardPointsEl.textContent = currentUser.rewardPoints || "0";
  if (cashbackEarnedEl)
    cashbackEarnedEl.textContent = `₹${currentUser.cashbackEarned}` || "₹0";
  if (patientAppointmentsEl)
    patientAppointmentsEl.textContent = currentUser.totalAppointments || "0";
  if (medicalRecordsEl)
    medicalRecordsEl.textContent = currentUser.medicalRecords || "0";

  loadUpcomingAppointments();
}

function loadUpcomingAppointments() {
  const upcomingAppointments = document.getElementById("upcomingAppointments");
  if (!upcomingAppointments) return;

  const mockAppointments = [
    {
      doctorName: "Dr. Amit Verma",
      specialization: "Cardiologist",
      date: "2025-01-20",
      time: "10:00 AM",
      type: "Follow-up",
    },
  ];

  upcomingAppointments.innerHTML = mockAppointments
    .map(
      (apt) => `
    <div class="appointment-card">
      <div class="appointment-details">
        <h4>${apt.doctorName}</h4>
        <p><strong>Specialization:</strong> ${apt.specialization}</p>
        <p><strong>Date:</strong> ${apt.date}</p>
        <p><strong>Time:</strong> ${apt.time}</p>
        <p><strong>Type:</strong> ${apt.type}</p>
      </div>
      <div class="appointment-status status-scheduled">Scheduled</div>
    </div>
  `
    )
    .join("");
}

// HOSPITAL DASHBOARD FUNCTIONS
function showHospitalTab(tabName) {
  console.log("Showing hospital tab:", tabName);

  const tabs = ["overview", "doctors", "patients", "resources", "analytics"];
  tabs.forEach((tab) => {
    const element = document.getElementById(
      `hospital${tab.charAt(0).toUpperCase() + tab.slice(1)}`
    );
    if (element) element.classList.add("hidden");
  });

  const selectedTab = document.getElementById(
    `hospital${tabName.charAt(0).toUpperCase() + tabName.slice(1)}`
  );
  if (selectedTab) selectedTab.classList.remove("hidden");

  const allTabs = document.querySelectorAll(
    "#hospitalDashboard .dashboard-nav .nav-tab"
  );
  allTabs.forEach((tab) => tab.classList.remove("active"));

  const tabButtons = Array.from(allTabs);
  const activeButton = tabButtons.find((btn) =>
    btn.textContent.toLowerCase().includes(tabName.toLowerCase())
  );
  if (activeButton) activeButton.classList.add("active");

  currentHospitalTab = tabName;

  if (tabName === "analytics") {
    loadHospitalAnalytics();
  }
}

function loadHospitalDashboard() {
  if (!currentUser) return;

  const hospitalNameEl = document.getElementById("hospitalName");
  if (hospitalNameEl) hospitalNameEl.textContent = currentUser.name;
}

function loadHospitalAnalytics() {
  setTimeout(() => {
    const patientFlowCtx = document.getElementById("patientFlowChart");
    if (patientFlowCtx && typeof Chart !== "undefined") {
      new Chart(patientFlowCtx.getContext("2d"), {
        type: "bar",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              label: "Patient Admissions",
              data: [450, 520, 480, 590, 510, 620],
              backgroundColor: "#1FB8CD",
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    }
  }, 100);

  setTimeout(() => {
    const revenueCtx = document.getElementById("revenueChart");
    if (revenueCtx && typeof Chart !== "undefined") {
      new Chart(revenueCtx.getContext("2d"), {
        type: "line",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              label: "Revenue (₹ Lakhs)",
              data: [75, 82, 78, 85, 88, 92],
              borderColor: "#B4413C",
              backgroundColor: "rgba(180, 65, 60, 0.1)",
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    }
  }, 200);
}

// MEDICAL STORE DASHBOARD FUNCTIONS
function showStoreTab(tabName) {
  console.log("Showing store tab:", tabName);

  const tabs = [
    "overview",
    "prescriptions",
    "inventory",
    "sales",
    "commissions",
  ];
  tabs.forEach((tab) => {
    const element = document.getElementById(
      `store${tab.charAt(0).toUpperCase() + tab.slice(1)}`
    );
    if (element) element.classList.add("hidden");
  });

  const selectedTab = document.getElementById(
    `store${tabName.charAt(0).toUpperCase() + tabName.slice(1)}`
  );
  if (selectedTab) selectedTab.classList.remove("hidden");

  const allTabs = document.querySelectorAll(
    "#medicalStoreDashboard .dashboard-nav .nav-tab"
  );
  allTabs.forEach((tab) => tab.classList.remove("active"));

  const tabButtons = Array.from(allTabs);
  const activeButton = tabButtons.find((btn) =>
    btn.textContent.toLowerCase().includes(tabName.toLowerCase())
  );
  if (activeButton) activeButton.classList.add("active");

  currentStoreTab = tabName;
}

function loadMedicalStoreDashboard() {
  if (!currentUser) return;

  const storeNameEl = document.getElementById("storeName");
  if (storeNameEl) storeNameEl.textContent = currentUser.name;

  loadPendingVerifications();
  loadLowStockAlerts();
}

function loadPendingVerifications() {
  const pendingVerifications = document.getElementById("pendingVerifications");
  if (!pendingVerifications) return;

  const mockVerifications = [
    {
      id: "RX001",
      patientName: "Rajesh Kumar",
      doctor: "Dr. Amit Verma",
      amount: "₹2,500",
    },
    {
      id: "RX002",
      patientName: "Priya Sharma",
      doctor: "Dr. Sunita Patel",
      amount: "₹1,800",
    },
  ];

  pendingVerifications.innerHTML = mockVerifications
    .map(
      (verif) => `
    <div class="verification-card">
      <div class="verification-details">
        <h5>Prescription ${verif.id}</h5>
        <p><strong>Patient:</strong> ${verif.patientName}</p>
        <p><strong>Doctor:</strong> ${verif.doctor}</p>
        <p><strong>Amount:</strong> ${verif.amount}</p>
      </div>
      <div class="verification-actions">
        <button class="btn btn--sm btn--primary">Verify</button>
        <button class="btn btn--sm btn--outline">View Details</button>
      </div>
    </div>
  `
    )
    .join("");
}

function loadLowStockAlerts() {
  const lowStockAlerts = document.getElementById("lowStockAlerts");
  if (!lowStockAlerts) return;

  const mockAlerts = [
    { medicine: "Paracetamol 500mg", stock: 15, status: "low" },
    { medicine: "Amoxicillin 250mg", stock: 0, status: "out" },
  ];

  lowStockAlerts.innerHTML = mockAlerts
    .map(
      (alert) => `
    <div class="alert-card ${
      alert.status === "out" ? "alert-high" : "alert-moderate"
    }">
      <div class="alert-icon">${alert.status === "out" ? "🚫" : "⚠️"}</div>
      <div class="alert-content">
        <h5>${alert.medicine}</h5>
        <p>Stock: ${alert.stock} units</p>
        <p>${alert.status === "out" ? "Out of stock" : "Low stock"}</p>
      </div>
    </div>
  `
    )
    .join("");
}

// LABORATORY DASHBOARD FUNCTIONS
function showLabTab(tabName) {
  console.log("Showing lab tab:", tabName);

  const tabs = ["overview", "tests", "results", "equipment", "reports"];
  tabs.forEach((tab) => {
    const element = document.getElementById(
      `lab${tab.charAt(0).toUpperCase() + tab.slice(1)}`
    );
    if (element) element.classList.add("hidden");
  });

  const selectedTab = document.getElementById(
    `lab${tabName.charAt(0).toUpperCase() + tabName.slice(1)}`
  );
  if (selectedTab) selectedTab.classList.remove("hidden");

  const allTabs = document.querySelectorAll(
    "#laboratoryDashboard .dashboard-nav .nav-tab"
  );
  allTabs.forEach((tab) => tab.classList.remove("active"));

  const tabButtons = Array.from(allTabs);
  const activeButton = tabButtons.find((btn) =>
    btn.textContent.toLowerCase().includes(tabName.toLowerCase())
  );
  if (activeButton) activeButton.classList.add("active");

  currentLabTab = tabName;

  if (tabName === "reports") {
    loadLabReports();
  }
}

function loadLaboratoryDashboard() {
  if (!currentUser) return;

  const labNameEl = document.getElementById("labName");
  if (labNameEl) labNameEl.textContent = currentUser.name;

  loadTodayTests();
  loadEquipmentStatus();
}

function loadTodayTests() {
  const todayTests = document.getElementById("todayTests");
  if (!todayTests) return;

  const mockTests = [
    {
      id: "T001",
      patient: "Rajesh Kumar",
      test: "Blood Sugar",
      time: "10:00 AM",
      status: "processing",
    },
    {
      id: "T002",
      patient: "Priya Sharma",
      test: "Lipid Profile",
      time: "11:30 AM",
      status: "pending",
    },
  ];

  todayTests.innerHTML = mockTests
    .map(
      (test) => `
    <div class="test-card">
      <div class="test-details">
        <h5>Test ${test.id}</h5>
        <p><strong>Patient:</strong> ${test.patient}</p>
        <p><strong>Test:</strong> ${test.test}</p>
        <p><strong>Time:</strong> ${test.time}</p>
      </div>
      <div class="test-status status-${test.status}">${
        test.status.charAt(0).toUpperCase() + test.status.slice(1)
      }</div>
    </div>
  `
    )
    .join("");
}

function loadEquipmentStatus() {
  const equipmentStatus = document.getElementById("equipmentStatus");
  if (!equipmentStatus) return;

  const mockEquipment = [
    { name: "Blood Analyzer", status: "operational" },
    { name: "X-Ray Machine", status: "maintenance" },
    { name: "Microscope", status: "operational" },
  ];

  equipmentStatus.innerHTML = mockEquipment
    .map(
      (eq) => `
    <div class="equipment-item">
      <span>${eq.name}</span>
      <span class="status--${
        eq.status === "operational" ? "success" : "warning"
      }">${eq.status.charAt(0).toUpperCase() + eq.status.slice(1)}</span>
    </div>
  `
    )
    .join("");
}

function loadLabReports() {
  setTimeout(() => {
    const testVolumeCtx = document.getElementById("testVolumeChart");
    if (testVolumeCtx && typeof Chart !== "undefined") {
      new Chart(testVolumeCtx.getContext("2d"), {
        type: "bar",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              label: "Tests Conducted",
              data: [890, 920, 850, 980, 910, 1050],
              backgroundColor: "#5D878F",
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    }
  }, 100);

  setTimeout(() => {
    const testTypesCtx = document.getElementById("testTypesChart");
    if (testTypesCtx && typeof Chart !== "undefined") {
      new Chart(testTypesCtx.getContext("2d"), {
        type: "pie",
        data: {
          labels: ["Blood Tests", "Urine Tests", "Radiology", "Microbiology"],
          datasets: [
            {
              data: [45, 25, 20, 10],
              backgroundColor: ["#1FB8CD", "#FFC185", "#B4413C", "#5D878F"],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    }
  }, 200);
}

// BLOOD BANK DASHBOARD FUNCTIONS
function showBloodBankTab(tabName) {
  console.log("Showing blood bank tab:", tabName);

  const tabs = ["overview", "inventory", "donors", "requests", "campaigns"];
  tabs.forEach((tab) => {
    const element = document.getElementById(
      `bloodBank${tab.charAt(0).toUpperCase() + tab.slice(1)}`
    );
    if (element) element.classList.add("hidden");
  });

  const selectedTab = document.getElementById(
    `bloodBank${tabName.charAt(0).toUpperCase() + tabName.slice(1)}`
  );
  if (selectedTab) selectedTab.classList.remove("hidden");

  const allTabs = document.querySelectorAll(
    "#bloodBankDashboard .dashboard-nav .nav-tab"
  );
  allTabs.forEach((tab) => tab.classList.remove("active"));

  const tabButtons = Array.from(allTabs);
  const activeButton = tabButtons.find((btn) =>
    btn.textContent.toLowerCase().includes(tabName.toLowerCase())
  );
  if (activeButton) activeButton.classList.add("active");

  currentBloodBankTab = tabName;
}

function loadBloodBankDashboard() {
  if (!currentUser) return;

  const bloodBankNameEl = document.getElementById("bloodBankName");
  if (bloodBankNameEl) bloodBankNameEl.textContent = currentUser.name;

  loadBloodInventory();
  loadEmergencyRequests();
}

function loadBloodInventory() {
  const bloodInventory = document.getElementById("bloodInventory");
  if (!bloodInventory) return;

  const bloodGroups = [
    { type: "A+", units: 45, level: "normal" },
    { type: "A-", units: 12, level: "low" },
    { type: "B+", units: 38, level: "normal" },
    { type: "B-", units: 8, level: "critical" },
    { type: "AB+", units: 25, level: "normal" },
    { type: "AB-", units: 5, level: "critical" },
    { type: "O+", units: 65, level: "normal" },
    { type: "O-", units: 15, level: "low" },
  ];

  bloodInventory.innerHTML = bloodGroups
    .map(
      (bg) => `
    <div class="blood-group-card">
      <div class="blood-group-type">${bg.type}</div>
      <div class="blood-units ${bg.level}">${bg.units}</div>
      <small>units</small>
    </div>
  `
    )
    .join("");
}

function loadEmergencyRequests() {
  const emergencyRequests = document.getElementById("emergencyRequests");
  if (!emergencyRequests) return;

  const mockRequests = [
    {
      id: "ER001",
      patient: "John Doe",
      bloodGroup: "O-",
      units: 2,
      hospital: "City Hospital",
      priority: "Critical",
    },
    {
      id: "ER002",
      patient: "Jane Smith",
      bloodGroup: "AB+",
      units: 1,
      hospital: "Metro Hospital",
      priority: "Urgent",
    },
  ];

  emergencyRequests.innerHTML = mockRequests
    .map(
      (req) => `
    <div class="request-card priority-${req.priority.toLowerCase()}">
      <div class="request-info">
        <h5>Emergency Request ${req.id}</h5>
        <p><strong>Patient:</strong> ${req.patient}</p>
        <p><strong>Blood Group:</strong> <span class="blood-group-badge">${
          req.bloodGroup
        }</span></p>
        <p><strong>Units Needed:</strong> ${req.units}</p>
        <p><strong>Hospital:</strong> ${req.hospital}</p>
      </div>
      <div class="request-actions">
        <div class="status--${req.priority.toLowerCase()}">${req.priority}</div>
        <button class="btn btn--sm btn--primary">Fulfill</button>
      </div>
    </div>
  `
    )
    .join("");
}

// APPOINTMENT AND BOOKING FUNCTIONS
function showBookAppointment() {
  const modal = document.getElementById("bookAppointmentModal");
  if (modal) modal.classList.remove("hidden");
}

function handleBookAppointment(e) {
  e.preventDefault();

  const specialization = document.getElementById(
    "appointmentSpecialization"
  ).value;
  const doctor = document.getElementById("appointmentDoctor").value;
  const date = document.getElementById("appointmentDate").value;
  const time = document.getElementById("appointmentTime").value;

  if (!specialization || !doctor || !date || !time) {
    alert("Please fill in all fields");
    return;
  }

  alert("Appointment booked successfully!");
  closeModal("bookAppointmentModal");

  // Reset form
  const form = document.getElementById("bookAppointmentForm");
  if (form) form.reset();
}

// PERMISSION AND ACCESS FUNCTIONS
function requestPatientData(patientId) {
  const patient = sampleData.patientDirectory.find((p) => p.id === patientId);
  if (patient) {
    const patientNameEl = document.getElementById("requestPatientName");
    const patientIdEl = document.getElementById("requestPatientId");

    if (patientNameEl) patientNameEl.textContent = patient.name;
    if (patientIdEl) patientIdEl.textContent = `Patient ID: ${patient.id}`;

    const modal = document.getElementById("requestDataModal");
    if (modal) modal.classList.remove("hidden");
  }
}

function handleRequestData(e) {
  e.preventDefault();

  const reason = document.getElementById("accessReason").value;
  const duration = document.getElementById("accessDuration").value;

  if (!reason) {
    alert("Please provide a reason for access");
    return;
  }

  alert("Data access request sent to patient");
  closeModal("requestDataModal");

  // Reset form
  const form = document.getElementById("requestDataForm");
  if (form) form.reset();
}

function searchPatients() {
  alert("Patient search functionality activated");
}

// PLACEHOLDER FUNCTIONS FOR UI INTERACTIONS
function showAvailabilitySettings() {
  alert("Availability settings feature coming soon!");
}

function showPrescriptionPad() {
  alert("Digital prescription pad coming soon!");
}

function usePrescriptionTemplate(templateName) {
  alert(`Using prescription template: ${templateName}`);
}

function viewPatientHistory(patientId) {
  alert(`Viewing history for patient: ${patientId}`);
}

function showUploadRecord() {
  alert("Upload medical record feature coming soon!");
}

function showEmergencyAccess() {
  alert("Emergency access feature activated!");
}

function callEmergency() {
  alert(
    "🚑 Emergency services have been contacted!\nAmbulance dispatched to your location."
  );
}

function shareEmergencyData() {
  alert(
    "📤 Emergency medical data has been shared with nearby hospitals and first responders."
  );
}

function addNewDoctor() {
  alert("Add new doctor feature coming soon!");
}

function scanPrescription() {
  alert("📷 Prescription scanner activated");
}

function verifyPrescription() {
  alert("✓ Prescription verification system activated");
}

function addMedicine() {
  alert("Add medicine to inventory feature coming soon!");
}

function updateStock() {
  alert("Stock update feature coming soon!");
}

function scheduleTest() {
  alert("Schedule new test feature coming soon!");
}

function uploadResults() {
  alert("Upload test results feature coming soon!");
}

function scheduleMaintenace() {
  alert("Equipment maintenance scheduling coming soon!");
}

function addBloodUnit() {
  alert("Add blood unit feature coming soon!");
}

function updateExpiry() {
  alert("Update blood expiry feature coming soon!");
}

function registerDonor() {
  alert("Register new donor feature coming soon!");
}

function sendDonorReminder() {
  alert("Donor reminders sent successfully!");
}

function createBloodRequest() {
  alert("Create blood request feature coming soon!");
}

function createCampaign() {
  alert("Create donation campaign feature coming soon!");
}

console.log("MedConnect Pro application loaded successfully");
