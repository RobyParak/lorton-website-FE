import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const usePhotoStore = defineStore('photo', () => {
    // State
    const cart = ref([])
    const photos = ref([])

    // Actions
    function addToCart(photo) {
        // TODO: Implement cart logic for photo purchases
        cart.value.push(photo)
    }

    function removeFromCart(photoId) {
        // TODO: Implement remove from cart logic
        const index = cart.value.findIndex(p => p.id === photoId)
        if (index > -1) {
            cart.value.splice(index, 1)
        }
    }

    function clearCart() {
        cart.value = []
    }

    // Getters
    const cartCount = computed(() => cart.value.length)
    const cartTotal = computed(() => {
        // TODO: Calculate total price
        return 0
    })

    return {
        // State
        cart,
        photos,
        // Actions
        addToCart,
        removeFromCart,
        clearCart,
        // Getters
        cartCount,
        cartTotal
    }
})
