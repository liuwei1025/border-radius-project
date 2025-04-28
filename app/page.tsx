"use client"

import { useEffect, useRef, useState } from "react"
import { Package } from "lucide-react"
import Image from "next/image"

export default function ProductPage() {
  const [isSticky, setIsSticky] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current && contentRef.current) {
        const headerBottom = headerRef.current.getBoundingClientRect().bottom
        const contentTop = contentRef.current.getBoundingClientRect().top
        setIsSticky(contentTop <= 0)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Main product header with rounded corners that will change */}
      <div ref={headerRef} className="relative z-10 px-4 pt-4 pb-16 bg-red-500 text-white">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">新人专享</span>
            <span className="ml-2 text-xl font-bold">¥0.01</span>
            <span className="ml-2 text-xs">包邮到家</span>
          </div>
          <div className="flex items-center">
            <span className="text-xs">倒计时:</span>
            <div className="flex items-center ml-1">
              <span className="bg-black bg-opacity-30 text-white text-xs px-1 rounded">00</span>
              <span className="mx-0.5">:</span>
              <span className="bg-black bg-opacity-30 text-white text-xs px-1 rounded">14</span>
              <span className="mx-0.5">:</span>
              <span className="bg-black bg-opacity-30 text-white text-xs px-1 rounded">13</span>
            </div>
          </div>
        </div>

        <div className="flex items-center mb-4">
          <div className="w-16 h-16 bg-white rounded-md overflow-hidden mr-3">
            <Image
              src="/placeholder.svg?height=64&width=64"
              alt="原木铅笔"
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-medium">原木铅笔 [18支/600克]</h2>
            <p className="text-xs text-white text-opacity-80">已抢9999+</p>
            <div className="flex items-center mt-1">
              <span className="text-lg font-bold">¥0.01</span>
              <span className="text-xs line-through ml-2 text-white text-opacity-70">¥9.9</span>
              <button className="ml-auto bg-orange-500 text-white text-sm px-3 py-1 rounded-full">抢</button>
            </div>
          </div>
        </div>
      </div>

      {/* Shipping options that will stick to top */}
      <div
        ref={contentRef}
        className={`bg-white z-20 px-4 py-3 flex justify-between border-b transition-all duration-300 -mt-10 ${
          isSticky ? "sticky top-0 rounded-none" : "rounded-t-3xl"
        }`}
      >
        <div className="flex items-center text-sm font-medium text-gray-700">
          <span className="px-2 py-1 rounded-full bg-red-100 text-red-500 mr-2">
            <Package size={14} className="inline mr-1" />
            1分包邮
          </span>
          <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-500 mr-2">1元包邮</span>
          <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-500">1元以上</span>
        </div>
      </div>

      {/* Product list */}
      <div className="flex-1 bg-white px-4 py-4">
        <h3 className="text-sm font-medium text-gray-500 mb-3">爆款推荐</h3>

        {/* Product 1 */}
        <div className="border-b pb-4 mb-4">
          <div className="flex">
            <div className="w-24 h-24 bg-gray-100 rounded-md overflow-hidden mr-3">
              <Image
                src="/placeholder.svg?height=96&width=96"
                alt="双层动厚茶水分离杯"
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center mb-1">
                <span className="text-xs bg-blue-100 text-blue-500 px-1 rounded">新品</span>
                <span className="text-xs bg-red-100 text-red-500 px-1 rounded ml-1">热卖</span>
              </div>
              <h3 className="text-sm font-medium line-clamp-2">双层动厚茶水分离杯</h3>
              <div className="mt-1 flex items-center">
                <span className="text-xs bg-red-100 text-red-500 px-1 rounded">91%折扣</span>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <div>
                  <span className="text-red-500 font-bold">¥0.01</span>
                  <span className="text-xs text-gray-400 ml-1">新人价</span>
                </div>
                <button className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">去抢购</button>
              </div>
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="border-b pb-4 mb-4">
          <div className="flex">
            <div className="w-24 h-24 bg-gray-100 rounded-md overflow-hidden mr-3">
              <Image
                src="/placeholder.svg?height=96&width=96"
                alt="玻璃带盖碗1000ML一壶四杯"
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center mb-1">
                <span className="text-xs bg-red-100 text-red-500 px-1 rounded">热卖</span>
              </div>
              <h3 className="text-sm font-medium line-clamp-2">玻璃带盖碗1000ML一壶四杯套装</h3>
              <div className="mt-1 flex items-center">
                <span className="text-xs bg-red-100 text-red-500 px-1 rounded">92%折扣</span>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <div>
                  <span className="text-red-500 font-bold">¥0.01</span>
                  <span className="text-xs text-gray-400 ml-1">新人价</span>
                </div>
                <button className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">去抢购</button>
              </div>
            </div>
          </div>
        </div>

        {/* Product 3 */}
        <div className="border-b pb-4 mb-4">
          <div className="flex">
            <div className="w-24 h-24 bg-gray-100 rounded-md overflow-hidden mr-3">
              <Image
                src="/placeholder.svg?height=96&width=96"
                alt="全钢镂空高端石英男士腕表"
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center mb-1">
                <span className="text-xs bg-orange-100 text-orange-500 px-1 rounded">限量</span>
              </div>
              <h3 className="text-sm font-medium line-clamp-2">【全钢镂空】高端石英男士腕表</h3>
              <div className="mt-1 flex items-center">
                <span className="text-xs bg-red-100 text-red-500 px-1 rounded">95%折扣</span>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <div>
                  <span className="text-red-500 font-bold">¥0.01</span>
                  <span className="text-xs text-gray-400 ml-1">新人价</span>
                </div>
                <button className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">去抢购</button>
              </div>
            </div>
          </div>
        </div>

        {/* Product 4 */}
        <div>
          <div className="flex">
            <div className="w-24 h-24 bg-gray-100 rounded-md overflow-hidden mr-3">
              <Image
                src="/placeholder.svg?height=96&width=96"
                alt="手机自拍杆超轻三脚架"
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center mb-1">
                <span className="text-xs bg-green-100 text-green-500 px-1 rounded">新款</span>
              </div>
              <h3 className="text-sm font-medium line-clamp-2">手机自拍杆超轻三脚架</h3>
              <div className="mt-1 flex items-center">
                <span className="text-xs bg-red-100 text-red-500 px-1 rounded">90%折扣</span>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <div>
                  <span className="text-red-500 font-bold">¥0.01</span>
                  <span className="text-xs text-gray-400 ml-1">新人价</span>
                </div>
                <button className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">去抢购</button>
              </div>
            </div>
          </div>
        </div>

        {/* Add more products to enable scrolling */}
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="border-t mt-4 pt-4">
            <div className="flex">
              <div className="w-24 h-24 bg-gray-100 rounded-md overflow-hidden mr-3">
                <Image
                  src={`/placeholder.svg?height=96&width=96&text=Product${index + 5}`}
                  alt={`Product ${index + 5}`}
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium line-clamp-2">新人专享商品 {index + 5}</h3>
                <div className="mt-1 flex items-center">
                  <span className="text-xs bg-red-100 text-red-500 px-1 rounded">{90 + index}%折扣</span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <div>
                    <span className="text-red-500 font-bold">¥0.01</span>
                    <span className="text-xs text-gray-400 ml-1">新人价</span>
                  </div>
                  <button className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">去抢购</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
