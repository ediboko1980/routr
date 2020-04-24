package io.routr.core

import org.apache.logging.log4j.LogManager
import java.io.IOException
import java.io.OutputStream

/**
 * @author Pedro Sanders
 * @since v1
 */
class LogOutputStream : OutputStream() {
    private val sb = StringBuilder()

    @Throws(IOException::class)
    override fun write(b: Int) {
        if (b == '\n'.toInt()) {
            LOG.debug(sb.toString())
            sb.setLength(0)
        } else {
            sb.append(b.toChar())
        }
    }

    companion object {
        private val LOG = LogManager.getLogger()
    }
}