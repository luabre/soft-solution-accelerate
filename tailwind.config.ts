
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'sans': ['Space Grotesk', 'Inter', 'sans-serif'],
				'mono': ['monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				digital: {
					purple: '#9b87f5',
					'dark-purple': '#1A1F2C',
					'secondary-purple': '#7E69AB',
					'light-purple': '#D6BCFA',
					'neutral-gray': '#8E9196',
					'bright-blue': '#1EAEDB',
					'vivid-purple': '#8B5CF6'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-out': {
					'0%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
					'100%': {
						opacity: '0',
						transform: 'translateY(10px)'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'text-shimmer': {
					'0%': {
						'background-position': '-200% 0'
					},
					'100%': {
						'background-position': '200% 0'
					}
				},
				'float': {
					'0%': { 
						transform: 'translateY(0px)',
						opacity: '0.5'
					},
					'50%': { 
						transform: 'translateY(-20px)',
						opacity: '0.8' 
					},
					'100%': { 
						transform: 'translateY(0px)',
						opacity: '0.5'
					}
				},
				'float-rotate': {
					'0%': {
						transform: 'translateY(0) rotate(0deg)',
						opacity: '0.5'
					},
					'50%': {
						transform: 'translateY(-20px) rotate(180deg)',
						opacity: '0.8'
					},
					'100%': {
						transform: 'translateY(0) rotate(360deg)',
						opacity: '0.5'
					}
				},
				'star-fade': {
					'0%': {
						transform: 'scale(0)',
						opacity: '0.8'
					},
					'50%': {
						transform: 'scale(1)',
						opacity: '0.6'
					},
					'100%': {
						transform: 'scale(0)',
						opacity: '0'
					}
				},
				'typing': {
					from: { width: '0' },
					to: { width: '100%' }
				},
				'blink': {
					'50%': { borderColor: 'transparent' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-in-delay-1': 'fade-in 0.5s ease-out 0.2s forwards',
				'fade-in-delay-2': 'fade-in 0.5s ease-out 0.4s forwards',
				'fade-in-delay-3': 'fade-in 0.5s ease-out 0.6s forwards',
				'scale-in': 'scale-in 0.3s ease-out',
				'slide-in-right': 'slide-in-right 0.5s ease-out',
				'text-shimmer': 'text-shimmer 4s ease infinite',
				'float': 'float 8s ease-in-out infinite',
				'float-delay': 'float 10s ease-in-out 1s infinite',
				'float-rotate': 'float-rotate 15s ease-in-out infinite',
				'star-fade': 'star-fade 1.5s ease-out forwards',
				'typing': 'typing 2s steps(20, end)'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'purple-gradient': 'linear-gradient(135deg, #9b87f5 0%, #7E69AB 100%)',
				'dark-gradient': 'linear-gradient(to bottom, #1A1F2C 0%, #2A2F3C 100%)',
				'shimmer-gradient': 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 25%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)'
			},
			backgroundSize: {
				'200%': '200%',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
