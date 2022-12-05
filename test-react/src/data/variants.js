export const containerVariants = {
    hidden: {
      x: '100vw',
      opacity: 0
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        delay: 0.5
      }
    }
  }
  
export const nextVariant = {
    hidden: {
      x: '-100vw',
    },
    visible: {
      x: 0,
      transition: { 
        type: 'spring',
        stiffness: 120,
        delay: 0.8
      }
    }
  }
  
export const elementVariant = {
    hidden: {
        x: '-100vw',
    },
    visible: {
        x: 0,
        transition: { 
        type: 'spring',
        stiffness: 120,
        delay: 0.2
        }
    }
  }

export const personCardsVariant = {
  hidden: {
    x: '100vw'
  },
  visible: {
    x: 0,
    transition: {
      delay: 0.1, type: 'spring'
    }
  }
}

export const personCardVariant = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2
    }
  }
}