import React from 'react'
//stiffnes property vazi smao ako je type: spring

const MotionFramerTest = () => {
  return (
    <>
        <motion.button
            className='bg-green-200 rounded-2xl px-8 py-2 border-2
            border-black '
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.1, backgroundColor: '#b4b4b4'}}
            >
            Press me
            </motion.button>
            <motion.div
            variants={nextVariant}
            initial="hidden"
            animate="visible"
            className='bg-red-400 border-2 border-black p-6 rounded-2xl mt-5'
            >
            Marine bok legendo!
            </motion.div>
            <motion.div
            className='bg-red-500 flex flex-col gap-2 border-2
            border-black mt-8 items-center p-2'
            >
            {[1, 2, 3, 4, 5, 6].map((number, index) =>
                <motion.div
                className='border-2 bg-green-500 border-black w-full p-2'
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', delay: index / 0.9 }}
                whileHover={{ backgroundColor: "#b3b3b3" }}
                >
                {number}
                </motion.div>
            )}
            </motion.div>
    </>
  )
}

export default MotionFramerTest