module.exports = {
  content: ["./pages/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2D5A4F", // deep-teal
          50: "#F0F9F7", // deep-teal-50
          100: "#D1F2ED", // deep-teal-100
          200: "#A3E5DB", // deep-teal-200
          300: "#75D8C9", // deep-teal-300
          400: "#47CBB7", // deep-teal-400
          500: "#2D5A4F", // deep-teal-500
          600: "#244840", // deep-teal-600
          700: "#1B3630", // deep-teal-700
          800: "#122420", // deep-teal-800
          900: "#091210", // deep-teal-900
        },
        secondary: {
          DEFAULT: "#4A7C59", // forest-green
          50: "#F2F8F4", // forest-green-50
          100: "#E5F1E9", // forest-green-100
          200: "#CBE3D3", // forest-green-200
          300: "#B1D5BD", // forest-green-300
          400: "#97C7A7", // forest-green-400
          500: "#4A7C59", // forest-green-500
          600: "#3E6347", // forest-green-600
          700: "#324A35", // forest-green-700
          800: "#263123", // forest-green-800
          900: "#1A1811", // forest-green-900
        },
        accent: {
          DEFAULT: "#7C4DFF", // purple-accent
          50: "#F5F2FF", // purple-accent-50
          100: "#EBE5FF", // purple-accent-100
          200: "#D7CBFF", // purple-accent-200
          300: "#C3B1FF", // purple-accent-300
          400: "#AF97FF", // purple-accent-400
          500: "#7C4DFF", // purple-accent-500
          600: "#6341CC", // purple-accent-600
          700: "#4A3599", // purple-accent-700
          800: "#312966", // purple-accent-800
          900: "#181D33", // purple-accent-900
        },
        background: "#F8FFFE", // soft-white
        surface: "#FFFFFF", // pure-white
        text: {
          primary: "#1A1A1A", // near-black
          secondary: "#6B7280", // balanced-gray
        },
        success: "#10B981", // emerald-500
        warning: "#F59E0B", // amber-500
        error: "#EF4444", // red-500
        border: "#E5E7EB", // gray-200
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        caption: ['Source Sans Pro', 'sans-serif'],
        data: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'fluid': 'clamp(1rem, 2.5vw, 1.25rem)',
      },
      boxShadow: {
        'custom-sm': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'custom-md': '0 2px 6px rgba(0, 0, 0, 0.1)',
        'custom-lg': '0 4px 8px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'custom': '8px',
      },
      transitionTimingFunction: {
        'custom': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      transitionDuration: {
        'fast': '200ms',
        'normal': '300ms',
      },
      animation: {
        'fade-in': 'fadeIn 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'loading': 'loading 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        loading: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      spacing: {
        'touch': '44px',
      },
      minHeight: {
        'touch': '44px',
      },
      minWidth: {
        'touch': '44px',
      },
    },
  },
  plugins: [],
}