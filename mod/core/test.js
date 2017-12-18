/**
 * @author Pedro Sanders
 * @since v1
 *
 * Unit Test for the "Core Module"
 */
import ResourcesUtil from 'resources/utils'
import getConfig from 'core/config_util'
import IPUtil from 'core/ip_util'

export let testGroup = { name: "Core Module" }

// Tests
testGroup.config_func = function () {
    const result = getConfig()
    assertTrue(result != undefined)
}

testGroup.validate_config = function () {
    const valid = new ResourcesUtil().isResourceValid('etc/schemas/config_schema.json', 'config/config.yml')
    assertTrue(valid)
}

testGroup.ip_utils = function () {
    const partialConfig = {
        spec: {
            localnets: ['192.168.1.2', '10.88.1.0/255.255.255.0', '192.168.0.1/28']
        }
    }

    const ipUtil = new IPUtil(partialConfig)
    assertTrue(ipUtil.isLocalnet('192.168.1.2'))
    assertTrue(ipUtil.isLocalnet('10.88.1.34'))
    assertTrue(ipUtil.isLocalnet('192.168.0.14'))
    assertFalse(ipUtil.isLocalnet('35.196.78.166'))
}
