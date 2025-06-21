"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Trophy, Target, Calendar, Zap, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MagneticButton } from "@/components/ui/magnetic-button"

export function LeetCodeDashboard() {
  const sectionRef = useRef<HTMLElement>(null)

  const stats = {
    totalSolved: 413,
    totalProblems: 3586,
    easy: { solved: 97, total: 882 },
    medium: { solved: 254, total: 1861 },
    hard: { solved: 62, total: 943 },
    submissions: 431,
    activeDays: 340,
    maxStreak: 253,
    badges: 18,
  }

  const CircularProgress = ({ percentage, size = 120, strokeWidth = 8, color = "#10b981" }) => {
    const radius = (size - strokeWidth) / 2
    const circumference = radius * 2 * Math.PI
    const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`

    return (
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="transparent"
            className="text-slate-700"
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeLinecap="round"
            initial={{ strokeDasharray: `0 ${circumference}` }}
            animate={{ strokeDasharray }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{stats.totalSolved}</div>
            <div className="text-xs text-slate-400">/{stats.totalProblems}</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section ref={sectionRef} id="leetcode" className="py-20 px-4 relative overflow-hidden bg-slate-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,transparent_12%,rgba(16,185,129,0.1)_12.5%,rgba(16,185,129,0.1)_87%,transparent_87.5%)] bg-[length:20px_20px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <motion.div
              className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Trophy className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-2">LeetCode</h2>
              <p className="text-xl text-slate-400">Coding Consistency & Problem Solving</p>
            </div>
          </div>

          <MagneticButton href="https://leetcode.com/u/aakansha8114/" className="inline-block">
            <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-6 py-3">
              <ExternalLink className="w-4 h-4 mr-2" />
              View LeetCode Profile
            </Button>
          </MagneticButton>
        </motion.div>

        {/* Main Dashboard */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Progress Circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-900/50 border-slate-800 text-center">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-center space-x-2">
                  <Target className="w-5 h-5 text-green-400" />
                  <span>Problems Solved</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-6">
                <CircularProgress percentage={(stats.totalSolved / stats.totalProblems) * 100} />

                <div className="grid grid-cols-3 gap-4 w-full">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-400">{stats.easy.solved}</div>
                    <div className="text-xs text-slate-400">Easy</div>
                    <div className="text-xs text-slate-500">{stats.easy.total}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-yellow-400">{stats.medium.solved}</div>
                    <div className="text-xs text-slate-400">Medium</div>
                    <div className="text-xs text-slate-500">{stats.medium.total}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-red-400">{stats.hard.solved}</div>
                    <div className="text-xs text-slate-400">Hard</div>
                    <div className="text-xs text-slate-500">{stats.hard.total}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Stats Cards */}
          <div className="lg:col-span-2 grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-900/50 border-slate-800">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Award className="w-5 h-5 text-purple-400" />
                    <span>Badges Earned</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-purple-400 mb-2">{stats.badges}</div>
                  <p className="text-slate-400 text-sm">Including 365 Days Badge</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-900/50 border-slate-800">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-green-400" />
                    <span>Active Days</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-400 mb-2">{stats.activeDays}</div>
                  <p className="text-slate-400 text-sm">Days of coding activity</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-900/50 border-slate-800">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-yellow-400" />
                    <span>Max Streak</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">{stats.maxStreak}</div>
                  <p className="text-slate-400 text-sm">Consecutive days</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Recent Activity */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="bg-slate-900/50 border-slate-800">
            <CardHeader>
              <CardTitle className="text-white">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <div>
                      <div className="text-white font-medium">Snakes and Ladders</div>
                      <div className="text-slate-400 text-sm">Medium • Accepted</div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-green-400 border-green-400/30">
                    21 days ago
                  </Badge>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <div>
                      <div className="text-white font-medium">Two Sum</div>
                      <div className="text-slate-400 text-sm">Easy • Accepted</div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-green-400 border-green-400/30">
                    25 days ago
                  </Badge>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <div>
                      <div className="text-white font-medium">Binary Tree Maximum Path Sum</div>
                      <div className="text-slate-400 text-sm">Hard • Accepted</div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-green-400 border-green-400/30">
                    28 days ago
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
