'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import {  X, ChevronDown, ArrowUpRight } from 'lucide-react'
import { CgMenuGridO as Menu } from "react-icons/cg";
import { motion, AnimatePresence, Variants } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const pathname = usePathname()

  const NavLinks = [
    { title: "Home", slug: "/" },
    { title: "Solutions", slug: "/solutions" },
    {
      title: "About",
      subLinks: [
        { title: "Company", slug: "/about/company" },
        { title: "Team", slug: "/about/team" },
        { title: "Careers", slug: "/careers" }
      ]
    },
    { title: "Investors", slug: "/investors" },
    {
      title: "Insights",
      subLinks: [
        { title: "Blogs", slug: "/insights/blogs" },
        { title: "News & Articles", slug: "/insights/news" },
        { title: "Videos", slug: "/insights/videos" }
      ]
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNavbar(false)
      } else {
        setShowNavbar(true)
      }
      setLastScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Animation variants
  const navbarVariants: Variants = {
    visible: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.4
      }
    },
    hidden: {
      y: -100,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.4
      }
    }
  }

  const mobileMenuVariants: Variants = {
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        height: {
          type: "spring",
          stiffness: 100,
          damping: 20,
          duration: 0.4
        },
        opacity: {
          duration: 0.3,
          delay: 0.1
        }
      }
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        height: {
          type: "spring",
          stiffness: 100,
          damping: 20,
          duration: 0.4
        },
        opacity: {
          duration: 0.2
        }
      }
    }
  }

  const mobileItemVariants: Variants = {
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }),
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.2
      }
    }
  }

  const dropdownVariants: Variants = {
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 25,
        duration: 0.3
      }
    },
    closed: {
      opacity: 0,
      scale: 0.95,
      y: -10,
      transition: {
        duration: 0.2
      }
    }
  }

  const buttonVariants: Variants = {
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  }

  const logoVariants: Variants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  }

  // Enhanced contact button variants
  const contactButtonVariants: Variants = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20,
        duration: 0.3
      }
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.1 }
    }
  }

  const contactArrowVariants: Variants = {
    initial: {
      rotate: 0,
      scale: 1,
      x: 0,
      y: 0
    },
    hover: {
      rotate: 45,
      scale: 1.2,
      x: 2,
      y: -2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15
      }
    },
    tap: {
      rotate: 90,
      scale: 0.9,
      transition: { duration: 0.1 }
    }
  }

  return (
    <motion.nav
      initial="visible"
      animate={showNavbar ? "visible" : "hidden"}
      variants={navbarVariants}
      className="fixed top-0 left-0 right-0 z-100  py-2 bg-white"
    >
      <div className=" mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            variants={logoVariants}
            initial="initial"
            whileHover="hover"
          >
            <Link href={'/'} className="flex-shrink-0">
              <Image src="/CNESS_Logo.svg" alt="Logo" width={100} height={100} />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NavLinks.map((link, idx) => {
              const isActive = link.slug === pathname ||
                (link.subLinks && link.subLinks.some(sub => sub.slug === pathname))

              return (
                <motion.div
                  key={idx}
                  className="relative group "
                  onHoverStart={() => setHoveredItem(idx)}
                  onHoverEnd={() => setHoveredItem(null)}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <Link
                      href={link.slug || ''}
                      className={`flex items-center text-foreground transition-all duration-300 font-medium text-base relative px-4 py-2 rounded-full ${isActive ? 'text-primary bg-gray-100' : 'hover:text-primary'
                        }`}
                    >
                      {link.title}
                      {link.subLinks && (
                        <motion.div
                          animate={{ rotate: hoveredItem === idx ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown
                            size={16}
                            className={`ml-1 ${isActive ? 'text-primary' : 'text-gray-500'
                              }`}
                          />
                        </motion.div>
                      )}

                      {/* Active indicator */}
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-gray-100 rounded-full -z-10"
                          transition={{ type: "spring", stiffness: 800, damping: 150 }}
                        />
                      )}
                    </Link>
                  </motion.div>

                  {/* Desktop Dropdown */}
                  <AnimatePresence>
                    {link.subLinks && hoveredItem === idx && (
                      <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={dropdownVariants}
                        className="absolute -left-10 mt-2 bg-active rounded-3xl w-52 border border-gray-200 overflow-hidden z-50"
                      >
                        {link.subLinks.map((sub, subIdx) => (
                          <motion.div
                            key={subIdx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{
                              opacity: 1,
                              x: 0,
                              transition: { delay: subIdx * 0.05 }
                            }}
                            className="relative overflow-hidden"
                          >
                            <motion.div
                              whileHover={{
                                x: 5,
                                transition: { type: "spring", stiffness: 300, damping: 25 }
                              }}
                            >
                              <Link
                                href={sub.slug}
                                className={`px-6 py-3 text-base font-medium transition-all duration-200 flex items-center justify-between group relative z-10 ${sub.slug === pathname
                                  ? 'text-primary bg-tertiary'
                                  : 'text-gray-600 hover:text-primary hover:bg-purple-50'
                                  }`}
                              >
                                <span>{sub.title}</span>
                                <motion.div
                                  className='bg-primary rounded-full p-1.5 text-secondary opacity-0 group-hover:opacity-100 transition-opacity'
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                >
                                  <ArrowUpRight size={12} />
                                </motion.div>

                                {/* Hover background */}
                                <motion.div
                                  className="absolute inset-0 bg-blue-50 -z-10"
                                  initial={{ scaleX: 0, originX: 0 }}
                                  whileHover={{
                                    scaleX: 1,
                                    transition: { type: "spring", stiffness: 300, damping: 25 }
                                  }}
                                />
                              </Link>
                            </motion.div>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>

          {/* Enhanced Contact Button - Desktop */}
          <div className="hidden md:block">
            <motion.div
              variants={contactButtonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className='bg-secondary group text-primary pl-4 pr-2 py-2 rounded-full flex font-medium items-center justify-center gap-3 cursor-pointer '
            >
              <Link href={'/contact'} className='text-base font-medium'>Contact</Link>
              <motion.div
                variants={contactArrowVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className='bg-primary rounded-full p-1.5 text-secondary group-hover:animate-spin'
              >
                <ArrowUpRight size={16} />
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? 'close' : 'menu'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className=' bg-primary text-secondary p-2 rounded-full'
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100/50 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
              {NavLinks.map((link, idx) => {
                const isActive = link.slug === pathname ||
                  (link.subLinks && link.subLinks.some(sub => sub.slug === pathname))

                return (
                  <motion.div
                    key={idx}
                    className="py-2"
                    custom={idx}
                    variants={mobileItemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <motion.div
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    >
                      <Link
                        href={link.slug || ''}
                        className={`flex items-center text-lg font-medium py-3 px-4 rounded-2xl transition-all duration-200 ${isActive
                          ? 'text-primary bg-tertiary shadow-sm'
                          : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                          }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="flex-1">{link.title}</span>
                        {link.subLinks && (
                          <ChevronDown
                            size={18}
                            className={`ml-2 transition-transform duration-200 ${isActive ? 'text-primary' : 'text-gray-500'
                              }`}
                          />
                        )}
                      </Link>
                    </motion.div>

                    {/* Mobile Sublinks */}
                    <AnimatePresence>
                      {link.subLinks && (
                        <motion.div
                          className="ml-6 mt-2 space-y-1"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {link.subLinks.map((sub, subIdx) => (
                            <motion.div
                              key={subIdx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{
                                opacity: 1,
                                x: 0,
                                transition: { delay: subIdx * 0.1 }
                              }}
                              className="relative overflow-hidden rounded-xl"
                            >
                              <motion.div
                                whileHover={{
                                  x: 5,
                                  transition: { type: "spring", stiffness: 300, damping: 25 }
                                }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <Link
                                  href={sub.slug}
                                  className={`flex items-center justify-between px-4 py-3 text-base transition-all duration-200 relative z-10 ${sub.slug === pathname
                                    ? 'text-primary'
                                    : 'text-gray-600 hover:text-primary'
                                    }`}
                                  onClick={() => setIsOpen(false)}
                                >
                                  <span>{sub.title}</span>
                                  <motion.div
                                    className='bg-primary/10 rounded-full p-1 text-primary opacity-70'
                                    whileHover={{ scale: 1.1, opacity: 1 }}
                                  >
                                    <ArrowUpRight size={10} />
                                  </motion.div>

                                  {/* Mobile sublink hover background */}
                                  <motion.div
                                    className="absolute inset-0 bg-gray-50 -z-10"
                                    initial={{ scaleX: 0, originX: 0 }}
                                    whileHover={{
                                      scaleX: 1,
                                      transition: { type: "spring", stiffness: 300, damping: 25 }
                                    }}
                                  />
                                </Link>
                              </motion.div>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}

              {/* Mobile Contact Button */}
              <motion.div
                className="py-2 mt-4"
                custom={NavLinks.length}
                variants={mobileItemVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <motion.div
                  variants={contactButtonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className='bg-secondary text-primary pl-4 pr-3 py-3 rounded-2xl flex font-medium items-center justify-center gap-3 cursor-pointer shadow-md mx-4'
                >
                  <Link
                    href={'/contact'}
                    className='text-lg font-medium flex-1 text-center'
                    onClick={() => setIsOpen(false)}
                  >
                    Contact Us
                  </Link>
                  <motion.div
                    variants={contactArrowVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                    className='bg-primary rounded-full p-2 text-secondary'
                  >
                    <ArrowUpRight size={18} />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar